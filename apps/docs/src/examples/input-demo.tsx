import { cn } from '@/lib/utils';

export function Input({
  className,
  type = 'text',
  disabled,
  placeholder,
  defaultValue,
  ...props
}: {
  className?: string;
  type?: string;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      disabled={disabled}
      placeholder={placeholder}
      defaultValue={defaultValue}
      {...props}
    />
  );
}

export function Textarea({
  className,
  disabled,
  placeholder,
  rows,
  ...props
}: {
  className?: string;
  disabled?: boolean;
  placeholder?: string;
  rows?: number;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      disabled={disabled}
      placeholder={placeholder}
      rows={rows}
      {...props}
    />
  );
}

export function InputDefaultDemo() {
  return <Input placeholder="Enter text..." />;
}

export function InputDisabledDemo() {
  return <Input placeholder="Disabled input" disabled />;
}

export function InputWithDefaultValueDemo() {
  return <Input defaultValue="Pre-filled value" />;
}

export function InputTypesDemo() {
  return (
    <div className="flex flex-col gap-4">
      <Input type="text" placeholder="Text input" />
      <Input type="email" placeholder="Email input" />
      <Input type="password" placeholder="Password input" />
      <Input type="number" placeholder="Number input" />
    </div>
  );
}

export function TextareaDefaultDemo() {
  return <Textarea placeholder="Type your message here." />;
}

export function TextareaDisabledDemo() {
  return <Textarea placeholder="Disabled textarea" disabled />;
}

export function TextareaWithRowsDemo() {
  return <Textarea placeholder="Taller textarea" rows={5} />;
}
