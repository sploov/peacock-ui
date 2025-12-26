# Tabs

A fluid, accessible tabs component with physics-based indicator movement.

<script setup>
import { TabsDemo } from '../demos/TabsDemo'
</script>

<TabsDemo />

## Usage

```tsx
import { PeacockTabs } from '@peacock-ui/core'
import { User, Bell } from 'lucide-react'

const items = [
  {
    id: 'account',
    label: 'Account',
    icon: <User />,
    content: <div>Account Settings</div>
  },
  {
    id: 'notifs',
    label: 'Notifications',
    icon: <Bell />,
    content: <div>Notifications</div>
  }
]

function MyComponent() {
  return <PeacockTabs items={items} variant="pill" />
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TabItem[]` | `[]` | Array of tab items with `id`, `label`, `content`, and optional `icon`. |
| `variant` | `'pill' \| 'underline' \| 'glass'` | `'pill'` | The visual style of the tabs. |
| `defaultValue` | `string` | `items[0].id` | The ID of the tab to be active by default. |
| `onValueChange` | `(value: string) => void` | - | Callback when the active tab changes. |
| `className` | `string` | - | Additional CSS classes for the container. |

## Variants

### Pill
A rounded background indicator, perfect for segmented controls or primary navigation.

### Glass
Integrated with the Quantum Engine's glassmorphism system for a premium, translucent look.

### Underline
A minimalist approach with a moving underline indicator, ideal for secondary navigation or information hierarchy.
