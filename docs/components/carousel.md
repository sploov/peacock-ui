# Carousel 3D

A physics-based, 3D parallax slider component for showcasing featured content.

<CarouselDemo />

## Usage

```tsx
import { PeacockCarousel } from '@peacock-ui/core';

const items = [
  {
    id: 1,
    title: "Feature One",
    image: "/path/to/image1.jpg",
    content: <p>Description here...</p>
  },
  {
    id: 2,
    title: "Feature Two",
    image: "/path/to/image2.jpg",
    content: <p>Description here...</p>
  }
];

function App() {
  return (
    <div className="h-[500px]">
      <PeacockCarousel items={items} />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `CarouselItem[]` | `[]` | Array of slide objects. |
| `autoPlay` | `boolean` | `false` | Whether to automatically advance slides. |
| `interval` | `number` | `5000` | Time in ms between auto-advancement. |
| `className` | `string` | `-` | Additional CSS classes for the container. |

### CarouselItem

| Property | Type | Description |
| :--- | :--- | :--- |
| `id` | `string \| number` | Unique identifier. |
| `content` | `ReactNode` | Content to display (usually text). |
| `title` | `string` | Title of the slide. |
| `image` | `string` | Background image URL. |
