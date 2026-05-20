import { ChevronRight, Github, Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DocsSidebar } from '@/components/docs-sidebar';
import { cn } from '@/lib/utils';

interface DocsLayoutProps {
  page: React.ComponentType;
  slug: string[];
}

export function DocsLayout({ page: Page, slug }: DocsLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const breadcrumbs =
    slug.length > 0
      ? slug.map((s, i) => ({
          label: s
            .split('-')
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(' '),
          path: `/docs/${slug.slice(0, i + 1).join('/')}`,
        }))
      : [];

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <div className="mr-4 flex">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mr-2 flex items-center space-x-2 md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
            <Link to="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold">shadcn-lynx</span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
              <Link
                to="/docs"
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  location.pathname === '/docs' || location.pathname === '/'
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
              >
                Documentation
              </Link>
              <Link
                to="/docs/components"
                className={cn(
                  'transition-colors hover:text-foreground/80',
                  location.pathname.startsWith('/docs/components')
                    ? 'text-foreground'
                    : 'text-foreground/60',
                )}
              >
                Components
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none" />
            <nav className="flex items-center">
              <button
                type="button"
                onClick={toggleDarkMode}
                className="flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                {darkMode ? (
                  <Sun className="size-4" />
                ) : (
                  <Moon className="size-4" />
                )}
                <span className="sr-only">Toggle theme</span>
              </button>
              <a
                href="https://github.com/your-org/shadcn-lynx"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center rounded-md w-9 h-9 hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background">
          <div className="container py-4 space-y-3">
            <Link
              to="/docs"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium"
            >
              Documentation
            </Link>
            <Link
              to="/docs/components"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-medium"
            >
              Components
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        {/* Sidebar */}
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r border-r-border md:sticky md:block">
          <DocsSidebar slug={slug} />
        </aside>

        {/* Page Content */}
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0 max-w-3xl">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <div className="mb-4 flex items-center space-x-1 text-sm text-muted-foreground">
                <Link
                  to="/docs"
                  className="hover:text-foreground transition-colors"
                >
                  Docs
                </Link>
                {breadcrumbs.map((crumb, i) => (
                  <span key={crumb.path} className="flex items-center">
                    <ChevronRight className="size-4" />
                    {i === breadcrumbs.length - 1 ? (
                      <span className="text-foreground font-medium">
                        {crumb.label}
                      </span>
                    ) : (
                      <Link
                        to={crumb.path}
                        className="hover:text-foreground transition-colors"
                      >
                        {crumb.label}
                      </Link>
                    )}
                  </span>
                ))}
              </div>
            )}

            <Page />
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-14 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ReactLynx and Tailwind CSS. Open source and free to use.
          </p>
        </div>
      </footer>
    </div>
  );
}
