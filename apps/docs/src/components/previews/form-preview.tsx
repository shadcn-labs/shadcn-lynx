export interface FormPreviewProps {
  onSubmit?: (data: Record<string, string>) => void;
}

export function FormPreview({ onSubmit }: FormPreviewProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries()) as Record<
      string,
      string
    >;
    onSubmit?.(data);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-full max-w-sm"
    >
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Name</label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Email</label>
        <input
          name="email"
          type="email"
          placeholder="john@example.com"
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-md text-sm font-medium h-10 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Submit
      </button>
    </form>
  );
}
