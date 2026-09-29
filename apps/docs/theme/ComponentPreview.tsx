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
  const file = defaultFile || `${variant}/index.tsx`;
  return (
    <Go
      example={component}
      defaultFile={file}
      defaultEntryName={variant}
      defaultTab="qrcode"
      entry={variant}
      webPreview={false}
    />
  );
}
