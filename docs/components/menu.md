# Glass Menu

A Command-K style interface with deep glassmorphism and backdrop filtering.

## Preview

<MenuDemo />

## Usage

```tsx
import { GlassMenu } from '@peacock-ui/core'
import { useState } from 'react'

function Example() {
  const [isOpen, setIsOpen] = useState(false)

  const items = [
    { id: '1', label: 'Documentation', icon: <Book size={16} /> },
    { id: '2', label: 'Components', icon: <Box size={16} /> },
    { id: '3', label: 'GitHub', icon: <Github size={16} /> },
  ]

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open Menu</button>
      <GlassMenu 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
        items={items} 
      />
    </>
  )
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `isOpen` | `boolean` | `false` | Controls the visibility of the menu. |
| `onClose` | `() => void` | - | Callback triggered when the menu should close (e.g., clicking backdrop). |
| `items` | `GlassMenuItem[]` | `[]` | Array of items to display in the menu. |

### GlassMenuItem

| Prop | Type | Description |
| --- | --- | --- |
| `id` | `string` | Unique identifier for the item. |
| `label` | `string` | The text to display. |
| `icon` | `ReactNode` | Optional icon to display on the left. |
| `onClick` | `() => void` | Callback triggered when the item is clicked. |
