import {
  AlertCircle,
  AlignLeft,
  Badge,
  BookOpen,
  CheckSquare,
  Component,
  CreditCard,
  Download,
  FormInput,
  Loader2,
  MessageSquare,
  MousePointer2,
  MoveHorizontal,
  Palette,
  PanelRight,
  Radio,
  RectangleEllipsis,
  SlidersHorizontal,
  Terminal,
  ToggleRight,
  Type,
  User,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface DocsSidebarProps {
  slug: string[];
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Introduction: BookOpen,
  Installation: Download,
  CLI: Terminal,
  Styling: Palette,
  Overview: Component,
  Button: MousePointer2,
  Input: Type,
  Card: CreditCard,
  Badge: Badge,
  Label: AlignLeft,
  Separator: MoveHorizontal,
  Skeleton: Loader2,
  Alert: AlertCircle,
  Avatar: User,
  Switch: ToggleRight,
  Checkbox: CheckSquare,
  Dialog: MessageSquare,
  Slider: SlidersHorizontal,
  Sheet: PanelRight,
  Popover: RectangleEllipsis,
  'Radio Group': Radio,
  Form: FormInput,
};

const navigation = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs' },
      { title: 'Installation', href: '/docs/getting-started/installation' },
      { title: 'CLI', href: '/docs/getting-started/cli' },
      { title: 'Styling', href: '/docs/getting-started/styling' },
    ],
  },
  {
    title: 'Components',
    items: [
      { title: 'Overview', href: '/docs/components' },
      { title: 'Button', href: '/docs/components/button' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Badge', href: '/docs/components/badge' },
      { title: 'Label', href: '/docs/components/label' },
      { title: 'Separator', href: '/docs/components/separator' },
      { title: 'Skeleton', href: '/docs/components/skeleton' },
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'Switch', href: '/docs/components/switch' },
      { title: 'Checkbox', href: '/docs/components/checkbox' },
      { title: 'Dialog', href: '/docs/components/dialog' },
      { title: 'Slider', href: '/docs/components/slider' },
      { title: 'Sheet', href: '/docs/components/sheet' },
      { title: 'Popover', href: '/docs/components/popover' },
      { title: 'Radio Group', href: '/docs/components/radio-group' },
      { title: 'Form', href: '/docs/components/form' },
    ],
  },
];

export function DocsSidebar({ slug }: DocsSidebarProps) {
  const currentPath = slug.length === 0 ? '/docs' : `/docs/${slug.join('/')}`;

  return (
    <div className="w-full py-4">
      <div className="mb-2 px-3 py-2">
        <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
          Getting Started
        </h4>
        <ul className="space-y-0.5">
          {navigation[0].items.map((item) => {
            const isActive = currentPath === item.href;
            const Icon = iconMap[item.title];
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    'group flex items-center rounded-md px-2 py-1.5 text-sm transition-colors',
                    isActive
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  )}
                >
                  {Icon && <Icon className="mr-2 size-4" />}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="mb-2 px-3 py-2">
        <h4 className="mb-2 rounded-md px-2 py-1 text-sm font-semibold text-foreground">
          Components
        </h4>
        <ul className="space-y-0.5">
          {navigation[1].items.map((item) => {
            const isActive = currentPath === item.href;
            const Icon = iconMap[item.title];
            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    'group flex items-center rounded-md px-2 py-1.5 text-sm transition-colors',
                    isActive
                      ? 'bg-accent text-accent-foreground font-medium'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground',
                  )}
                >
                  {Icon && <Icon className="mr-2 size-4" />}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
