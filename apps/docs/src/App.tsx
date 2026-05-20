import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { DocsLayout } from '@/components/docs-layout';
import '@/styles/globals.css';

import AlertPage from '@/content/docs/components/alert.mdx';
import AvatarPage from '@/content/docs/components/avatar.mdx';
import BadgePage from '@/content/docs/components/badge.mdx';
import ButtonPage from '@/content/docs/components/button.mdx';
import CardPage from '@/content/docs/components/card.mdx';
import CheckboxPage from '@/content/docs/components/checkbox.mdx';
import DialogPage from '@/content/docs/components/dialog.mdx';
import FormPage from '@/content/docs/components/form.mdx';
// Import MDX pages - Components
import ComponentsIndexPage from '@/content/docs/components/index.mdx';
import InputPage from '@/content/docs/components/input.mdx';
import LabelPage from '@/content/docs/components/label.mdx';
import PopoverPage from '@/content/docs/components/popover.mdx';
import RadioGroupPage from '@/content/docs/components/radio-group.mdx';
import SeparatorPage from '@/content/docs/components/separator.mdx';
import SheetPage from '@/content/docs/components/sheet.mdx';
import SkeletonPage from '@/content/docs/components/skeleton.mdx';
import SliderPage from '@/content/docs/components/slider.mdx';
import SwitchPage from '@/content/docs/components/switch.mdx';
import CliPage from '@/content/docs/getting-started/cli.mdx';
import InstallationPage from '@/content/docs/getting-started/installation.mdx';
import StylingPage from '@/content/docs/getting-started/styling.mdx';
// Import MDX pages - Getting Started
import IndexPage from '@/content/docs/index.mdx';

function ScrollToTop() {
  const _location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DocsLayout page={IndexPage} slug={[]} />} />
        <Route
          path="/docs"
          element={<DocsLayout page={IndexPage} slug={[]} />}
        />

        {/* Getting Started Routes */}
        <Route
          path="/docs/getting-started/installation"
          element={
            <DocsLayout
              page={InstallationPage}
              slug={['getting-started', 'installation']}
            />
          }
        />
        <Route
          path="/docs/getting-started/cli"
          element={
            <DocsLayout page={CliPage} slug={['getting-started', 'cli']} />
          }
        />
        <Route
          path="/docs/getting-started/styling"
          element={
            <DocsLayout
              page={StylingPage}
              slug={['getting-started', 'styling']}
            />
          }
        />

        {/* Components Routes */}
        <Route
          path="/docs/components"
          element={
            <DocsLayout page={ComponentsIndexPage} slug={['components']} />
          }
        />
        <Route
          path="/docs/components/button"
          element={
            <DocsLayout page={ButtonPage} slug={['components', 'button']} />
          }
        />
        <Route
          path="/docs/components/input"
          element={
            <DocsLayout page={InputPage} slug={['components', 'input']} />
          }
        />
        <Route
          path="/docs/components/card"
          element={<DocsLayout page={CardPage} slug={['components', 'card']} />}
        />
        <Route
          path="/docs/components/badge"
          element={
            <DocsLayout page={BadgePage} slug={['components', 'badge']} />
          }
        />
        <Route
          path="/docs/components/label"
          element={
            <DocsLayout page={LabelPage} slug={['components', 'label']} />
          }
        />
        <Route
          path="/docs/components/separator"
          element={
            <DocsLayout
              page={SeparatorPage}
              slug={['components', 'separator']}
            />
          }
        />
        <Route
          path="/docs/components/skeleton"
          element={
            <DocsLayout page={SkeletonPage} slug={['components', 'skeleton']} />
          }
        />
        <Route
          path="/docs/components/alert"
          element={
            <DocsLayout page={AlertPage} slug={['components', 'alert']} />
          }
        />
        <Route
          path="/docs/components/avatar"
          element={
            <DocsLayout page={AvatarPage} slug={['components', 'avatar']} />
          }
        />
        <Route
          path="/docs/components/switch"
          element={
            <DocsLayout page={SwitchPage} slug={['components', 'switch']} />
          }
        />
        <Route
          path="/docs/components/checkbox"
          element={
            <DocsLayout page={CheckboxPage} slug={['components', 'checkbox']} />
          }
        />
        <Route
          path="/docs/components/dialog"
          element={
            <DocsLayout page={DialogPage} slug={['components', 'dialog']} />
          }
        />
        <Route
          path="/docs/components/slider"
          element={
            <DocsLayout page={SliderPage} slug={['components', 'slider']} />
          }
        />
        <Route
          path="/docs/components/sheet"
          element={
            <DocsLayout page={SheetPage} slug={['components', 'sheet']} />
          }
        />
        <Route
          path="/docs/components/popover"
          element={
            <DocsLayout page={PopoverPage} slug={['components', 'popover']} />
          }
        />
        <Route
          path="/docs/components/radio-group"
          element={
            <DocsLayout
              page={RadioGroupPage}
              slug={['components', 'radio-group']}
            />
          }
        />
        <Route
          path="/docs/components/form"
          element={<DocsLayout page={FormPage} slug={['components', 'form']} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
