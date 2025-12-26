# Fluid Card

The `FluidCard` is a layout primitive that supports layout animations and expandable content using Framer Motion's `layout` prop.

## Preview

<ComponentPreview>
  <FluidCardDemo />
</ComponentPreview>

## Usage

```tsx
import { FluidCard } from '@peacock-ui/core'

function Example() {
  return (
    <FluidCard
      title="Architecture"
      description="Deep dive into our motion system"
      expandedContent={
        <div className="space-y-4">
          <p>Learn how we use spring physics to create natural-feeling interactions.</p>
          <ul className="list-disc pl-4">
            <li>Spring physics basics</li>
            <li>Layout transitions</li>
            <li>Gesture recognition</li>
          </ul>
        </div>
      }
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `title` | `string` | - | The main heading of the card. |
| `description` | `string` | - | A short summary shown below the title. |
| `expandedContent` | `ReactNode` | - | Content revealed when the card is clicked. |
| `className` | `string` | - | Additional CSS classes for the container. |