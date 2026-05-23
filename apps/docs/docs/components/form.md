---
title: Form
description: Build accessible and validated forms.
---

# Form

Build structured forms around `@lynx-js/lynx-ui` form primitives.

```bash
npx shadcn-lynx add form
```

## Usage

```tsx
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormRoot,
  FormSubmitButton,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

export function Example() {
  return (
    <FormRoot initialValues={{ email: '' }} onSubmit={(values) => console.log(values)}>
      <FormField name="email">
        <FormItem>
          <FormLabel>Email</FormLabel>
          <FormControl>
            <Input placeholder="you@example.com" />
          </FormControl>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormSubmitButton>Save</FormSubmitButton>
    </FormRoot>
  );
}
```

## Exports

`FormRoot`, `FormField`, `FormSubmitButton`, `FormItem`, `FormLabel`, `FormControl`, and `FormMessage`.

The registry entry depends on `types` and `label`.
