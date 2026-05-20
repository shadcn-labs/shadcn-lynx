import { cn } from '@/lib/utils';

export function FormRoot({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <form className={cn('space-y-6', className)}>{children}</form>;
}

export function FormField({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function FormItem({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={cn('space-y-2', className)}>{children}</div>;
}

export function FormLabel({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={cn('text-sm font-medium', className)}>{children}</label>
  );
}

export function FormControl({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <div className={className}>{children}</div>;
}

export function FormMessage({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <p className={cn('text-sm font-medium text-destructive', className)}>
      {children}
    </p>
  );
}

export function FormSubmitButton({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      className={cn(
        'w-full inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90',
        className,
      )}
    >
      {children}
    </button>
  );
}

export function FormDefaultDemo() {
  return (
    <FormRoot>
      <FormField>
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormRoot>
  );
}

export function FormWithValidationDemo() {
  return (
    <FormRoot>
      <FormField>
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <input
              placeholder="Enter username"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField>
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <input
              type="email"
              placeholder="Enter email"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormSubmitButton>Submit</FormSubmitButton>
    </FormRoot>
  );
}
