import type { MDXComponents } from 'mdx/types';
import { ComponentPreview } from '@/components/component-preview';
import { cn } from '@/lib/utils';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ComponentPreview,
    h1: ({ className, ...props }) => (
      <h1
        className={cn(
          'mt-2 scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl',
          className,
        )}
        {...props}
      />
    ),
    h2: ({ className, ...props }) => (
      <h2
        className={cn(
          'mt-10 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 border-b border-border',
          className,
        )}
        {...props}
      />
    ),
    h3: ({ className, ...props }) => (
      <h3
        className={cn(
          'mt-8 scroll-m-20 text-2xl font-semibold tracking-tight',
          className,
        )}
        {...props}
      />
    ),
    h4: ({ className, ...props }) => (
      <h4
        className={cn(
          'mt-8 scroll-m-20 text-xl font-semibold tracking-tight',
          className,
        )}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}
        {...props}
      />
    ),
    ol: ({ className, ...props }) => (
      <ol
        className={cn('my-6 ml-6 list-decimal [&>li]:mt-2', className)}
        {...props}
      />
    ),
    li: ({ className, ...props }) => (
      <li className={cn('', className)} {...props} />
    ),
    blockquote: ({ className, ...props }) => (
      <blockquote
        className={cn(
          'mt-6 border-l-2 border-l-border pl-6 italic [&>*]:text-muted-foreground',
          className,
        )}
        {...props}
      />
    ),
    img: ({ className, alt, ...props }) => (
      <img
        className={cn('my-4 rounded-md border border-border', className)}
        alt={alt}
        {...props}
      />
    ),
    hr: ({ ...props }) => (
      <hr className="my-4 md:my-8 border-border" {...props} />
    ),
    table: ({ className, ...props }) => (
      <div className="my-6 w-full overflow-y-auto rounded-lg border border-border">
        <table className={cn('w-full', className)} {...props} />
      </div>
    ),
    tr: ({ className, ...props }) => (
      <tr
        className={cn(
          'm-0 border-t border-border p-0 even:bg-muted/50',
          className,
        )}
        {...props}
      />
    ),
    th: ({ className, ...props }) => (
      <th
        className={cn(
          'border border-border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right bg-muted/50',
          className,
        )}
        {...props}
      />
    ),
    td: ({ className, ...props }) => (
      <td
        className={cn(
          'border border-border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right',
          className,
        )}
        {...props}
      />
    ),
    pre: ({ className, ...props }) => (
      <pre
        className={cn(
          'mb-4 mt-6 overflow-x-auto rounded-lg border border-border bg-zinc-950 dark:bg-zinc-900 p-4',
          className,
        )}
        {...props}
      />
    ),
    code: ({ className, ...props }) => (
      <code
        className={cn(
          'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-medium',
          className,
        )}
        {...props}
      />
    ),
    a: ({ className, ...props }) => (
      <a
        className={cn(
          'font-medium underline underline-offset-4 hover:text-foreground/80 transition-colors',
          className,
        )}
        {...props}
      />
    ),
    ...components,
  };
}
