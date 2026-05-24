import { Go } from '../theme/Go';

interface ComponentPreviewProps {
  component: string;
  variant?: string;
  defaultFile?: string;
}

export function ComponentPreview({
  component,
  variant = 'default',
  defaultFile,
}: ComponentPreviewProps) {
  const file = defaultFile || `${component}/${variant}/index.tsx`;
  return (
    <Go
      example={component}
      defaultFile={file}
      entry={`${component}/${variant}`}
    />
  );
}
