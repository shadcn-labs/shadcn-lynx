---
title: registry-item.json
description: Document registry item JSON files.
---

# registry-item.json

A registry item describes one installable unit.

| Field | Purpose |
| --- | --- |
| `name` | CLI install name. |
| `type` | Item namespace, such as `registry:ui`. |
| `title` | Human-readable label. |
| `description` | Short summary. |
| `dependencies` | npm dependencies. |
| `registryDependencies` | Other registry items to install. |
| `files` | Copied source files. |

