---
title: Form
description: A form component with validation.
---

import { ComponentPreview } from '@theme';

# Form

A form component with validation.

```bash
npx shadcn-lynx add form
```

## Examples

<ComponentPreview component="form" variant="default" />

## Usage

```tsx
import {
  FormRoot, FormField, FormItem,
  FormLabel, FormControl, FormMessage, FormSubmitButton,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
```

## API

| Component | Props |
| --- | --- |
| `FormRoot` | `{ initialValues?, onSubmit?, onChanged?, className?, children? }` |
| `FormField` | `FormFieldProps` (re-exported from `@lynx-js/lynx-ui`) |
| `FormItem` | `ViewProps` |
| `FormLabel` | `TextProps` |
| `FormControl` | `ViewProps` |
| `FormMessage` | `TextProps` |
| `FormSubmitButton` | `{ className?, children?, onSubmit? }` |
