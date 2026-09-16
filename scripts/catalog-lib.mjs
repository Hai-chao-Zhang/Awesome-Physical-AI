// Brace-aware BibTeX reader. Preserve entry text rather than rewriting citations.
export function parseBib(text, file = '') {
  const result = [];
  const pattern = /@(\w+)\s*\{\s*([^,]+),/g;
  let m;
  while ((m = pattern.exec(text))) {
    let depth = 1, end = pattern.lastIndex;
    for (; end < text.length && depth; end++) {
      if (text[end - 1] === '\\') continue;
      if (text[end] === '{') depth++;
      if (text[end] === '}') depth--;
    }
    if (depth) throw new Error(`Unclosed entry ${m[2]} in ${file}`);
    const raw = text.slice(m.index, end);
    const fields = {};
    const fieldPattern = /\b(\w+)\s*=\s*/g;
    let f;
    fieldPattern.lastIndex = raw.indexOf(',') + 1;
    while ((f = fieldPattern.exec(raw))) {
      let start = fieldPattern.lastIndex, stop = start;
      const opener = raw[start];
      if (opener === '{') {
        let d = 1; stop++;
        while (stop < raw.length && d) {
          if (raw[stop - 1] !== '\\') { if (raw[stop] === '{') d++; if (raw[stop] === '}') d--; }
          stop++;
        }
        fields[f[1].toLowerCase()] = raw.slice(start + 1, stop - 1);
      } else if (opener === '"') {
        stop++;
        while (stop < raw.length && (raw[stop] !== '"' || raw[stop - 1] === '\\')) stop++;
        fields[f[1].toLowerCase()] = raw.slice(start + 1, stop++);
      } else {
        while (stop < raw.length && !/[,}\n]/.test(raw[stop])) stop++;
        fields[f[1].toLowerCase()] = raw.slice(start, stop).trim();
      }
      fieldPattern.lastIndex = stop;
    }
    result.push({key: m[2].trim(), type: m[1].toLowerCase(), file, raw, fields});
    pattern.lastIndex = end;
  }
  return result;
}

export const displayText = value => String(value ?? '')
  .replace(/\\(?:textit|textbf|emph|textrm|textnormal)\s*/g, '')
  .replace(/\\&/g, '&').replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();

export function citedKeys(tex) {
  const active = tex.replace(/(?<!\\)%[^\n]*/g, '');
  return [...new Set([...active.matchAll(/\\cite\w*\*?(?:\[[^\]]*\])*\{([^}]+)\}/g)]
    .flatMap(m => m[1].split(',').map(x => x.trim())))].sort();
}
