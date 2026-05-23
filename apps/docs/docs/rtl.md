---
title: RTL
description: Right-to-left layout guidance for Lynx apps.
---

# RTL

RTL support depends on the target Lynx host and your styling configuration. Prefer logical placement props such as `start` and `end` when a primitive supports them, and avoid hard-coding left/right for components that should mirror.

Sheet already accepts `start` and `end` sides through the underlying `lynx-ui` primitive.

