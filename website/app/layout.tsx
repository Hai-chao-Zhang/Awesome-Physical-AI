import type { Metadata } from 'next';
import { basePath } from '@/lib/site';
import './globals.css';
export const metadata: Metadata = {
  title: 'From Language Priors towards Physical AGI',
  icons: { icon: `${basePath}/favicon.svg` },
  description: 'A research framework and curated reading collection connecting language priors, physical interaction, and evidence of generality.',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
