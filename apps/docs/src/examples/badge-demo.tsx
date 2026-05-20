import { cn } from '@/lib/utils';

const badgeVariants = {
  default:
    'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
  secondary:
    'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive:
    'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
  outline: 'text-foreground',
};

export function Badge({
  className,
  variant = 'default',
  children,
  ...props
}: {
  className?: string;
  variant?: keyof typeof badgeVariants;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        badgeVariants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BadgeDefaultDemo() {
  return <Badge>Default</Badge>;
}

export function BadgeSecondaryDemo() {
  return <Badge variant="secondary">Secondary</Badge>;
}

export function BadgeDestructiveDemo() {
  return <Badge variant="destructive">Destructive</Badge>;
}

export function BadgeOutlineDemo() {
  return <Badge variant="outline">Outline</Badge>;
}

export function BadgeVariantsDemo() {
  return (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
