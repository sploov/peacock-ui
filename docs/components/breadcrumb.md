# Breadcrumb

Displays the path to the current resource using a hierarchy of links.

<script setup>
import { BreadcrumbDemo } from '../demos/BreadcrumbDemo'
</script>

<BreadcrumbDemo />

## Usage

```tsx
import { PeacockBreadcrumb } from '@peacock-ui/core';
import { Home } from 'lucide-react';

function App() {
  return (
    <PeacockBreadcrumb
      items={[
        { icon: <Home />, href: '/' },
        { label: 'Components', href: '/components' },
        { label: 'Breadcrumb' } // Last item is current page
      ]}
    />
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `BreadcrumbItem[]` | `[]` | Array of items to display. |
| `separator` | `ReactNode` | `ChevronRight` | Custom separator between items. |
| `className` | `string` | `-` | Additional CSS classes. |

### BreadcrumbItem

| Property | Type | Description |
| :--- | :--- | :--- |
| `label` | `string` | The text to display. |
| `href` | `string` | The URL to navigate to. Omit for the last item. |
| `icon` | `ReactNode` | Optional icon to display before the label. |
