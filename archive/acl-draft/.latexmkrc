sub prepend_env_path {
    my ($name, @paths) = @_;
    my $existing = $ENV{$name} // '';
    my $prefix = join(':', @paths) . ':';
    $ENV{$name} = $prefix . $existing;
}

# The main ACL file lives in latex/, while section files live at repo root.
prepend_env_path('TEXINPUTS', '.', 'latex//');
prepend_env_path('BIBINPUTS', '.', 'latex//');
prepend_env_path('BSTINPUTS', '.', 'latex//');
