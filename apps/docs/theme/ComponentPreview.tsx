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
  // `defaultFile` and `entry` are resolved relative to the example folder set
  // by `example`, so they must NOT repeat the component name. `defaultEntryName`
  // selects the matching web/lynx bundle from templateFiles[].name.
  const file = defaultFile || `${variant}/index.tsx`;
  return (
    <Go
      example={component}
      defaultFile={file}
      defaultEntryName={variant}
      entry={variant}
      webPreviewMode="auto"
    />
  );
}
