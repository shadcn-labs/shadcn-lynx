import { Check, Code, Copy, Eye } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ComponentPreviewProps {
  component: React.ComponentType;
  code: string;
  title?: string;
  description?: string;
}

export function ComponentPreview({
  component: Component,
  code,
  title,
  description,
}: ComponentPreviewProps) {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-6 border border-border rounded-lg overflow-hidden">
      {/* Header */}
      {(title || description) && (
        <div className="px-4 py-3 border-b border-border bg-muted/50">
          {title && <h4 className="text-sm font-semibold">{title}</h4>}
          {description && (
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
          )}
        </div>
      )}

      {/* Preview */}
      <div className="relative">
        <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setShowCode(false)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                !showCode
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Eye className="size-3.5" />
              Preview
            </button>
            <button
              type="button"
              onClick={() => setShowCode(true)}
              className={cn(
                'flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors',
                showCode
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground',
              )}
            >
              <Code className="size-3.5" />
              Code
            </button>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-colors text-muted-foreground hover:text-foreground"
          >
            {copied ? (
              <>
                <Check className="size-3.5" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="size-3.5" />
                Copy
              </>
            )}
          </button>
        </div>

        {/* Content */}
        <div
          className={cn(
            'min-h-[200px] flex items-center justify-center p-6',
            showCode && 'bg-zinc-950 dark:bg-zinc-900',
          )}
        >
          {showCode ? (
            <pre className="w-full overflow-x-auto">
              <code className="text-sm text-zinc-50 dark:text-zinc-50 font-mono">
                {code}
              </code>
            </pre>
          ) : (
            <Component />
          )}
        </div>
      </div>
    </div>
  );
}
