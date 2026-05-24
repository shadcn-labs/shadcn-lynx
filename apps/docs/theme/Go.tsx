import { Go as GoBase, GoConfigProvider, type GoProps } from '@lynx-js/go-web';
import { rspressAdapter } from '@lynx-js/go-web/adapters/rspress';
import { ExamplePreviewSSG } from '@lynx-js/go-web/ssg';

const { useI18n: _, ...adapter } = rspressAdapter;

let ssgExampleRoot: string | undefined;
try {
  const path = require('path');
  ssgExampleRoot = path.join(__dirname, '../docs/public/lynx-examples');
} catch {
  // Client-side: path not available, SSG only runs server-side
}

const config = {
  exampleBasePath: '/lynx-examples',
  ...adapter,
  SSGComponent: ExamplePreviewSSG,
  ssgExampleRoot,
};

export function Go(props: GoProps) {
  return (
    <GoConfigProvider config={config}>
      <GoBase {...props} />
    </GoConfigProvider>
  );
}
