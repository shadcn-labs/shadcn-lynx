export interface DocPage {
  title: string;
  description?: string;
  slug: string[];
  body: React.ComponentType;
}

export interface MetaConfig {
  pages: string[];
  title?: string;
  root?: boolean;
}

export const ROUTES = {
  HOME: '/',
  DOCS: '/docs',
} as const;

export function formatTitleFromSlug(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
