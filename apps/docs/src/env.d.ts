/// <reference types="@rsbuild/core/types" />

declare module '*.md' {
  let MDXComponent: () => JSX.Element;
  export default MDXComponent;
}

declare module '*.mdx' {
  let MDXComponent: () => JSX.Element;
  export default MDXComponent;
}

/**
 * Imports the SVG file as a React component.
 * @requires [@rsbuild/plugin-svgr](https://npmjs.com/package/@rsbuild/plugin-svgr)
 */
declare module '*.svg?react' {
  import type React from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}
