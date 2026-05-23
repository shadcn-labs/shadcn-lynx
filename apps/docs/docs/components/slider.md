---
title: Slider
description: An input where the user selects a value from within a range.
---

# Slider

An input where the user selects a value from within a range.

```bash
npx shadcn-lynx add slider
```

## Usage

```tsx
import { Slider } from '@/components/ui/slider';

export function Example() {
  return <Slider defaultValue={50} min={0} max={100} />;
}
```

## API

Slider wraps `SliderRoot`, `SliderTrack`, `SliderIndicator`, and `SliderThumb` from `@lynx-js/lynx-ui`.

| Prop | Type |
| --- | --- |
| `value` | primitive slider value |
| `defaultValue` | primitive slider default value |
| `min` | `number` |
| `max` | `number` |
| `step` | `number` |
| `disabled` | `boolean` |
| `onValueChange` | primitive value callback |
| `onDragging` | primitive dragging callback |
| `onValueCommit` | primitive commit callback |
| `trackClassName` | `string` |
| `indicatorClassName` | `string` |
| `thumbClassName` | `string` |
