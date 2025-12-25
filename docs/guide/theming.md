# Theming

Peacock UI is built on top of Tailwind CSS 4 and leverages CSS variables for deep customization.

## Color System

The default palette is inspired by high-fidelity dark modes.

| Variable | Default Hex | Description |
| --- | --- | --- |
| `peacock-primary` | `#5865F2` | The signature Discord-inspired blue. |
| `peacock-success` | `#23a559` | Vibrant emerald for success states. |
| `peacock-danger` | `#f43f5e` | Soft rose for errors. |
| `peacock-dark` | `#0f0f12` | Deep charcoal for backgrounds. |

## Customizing via Tailwind

You can override these colors in your `tailwind.config.mjs`:

```js
export default {
  theme: {
    extend: {
      colors: {
        peacock: {
          primary: '#your-hex-code',
        }
      }
    }
  }
}
```

## Dark Mode

Peacock UI is dark-mode first. Ensure your application has the `dark` class on a parent element (or use the `PeacockProvider`) to enable the full aesthetic.

```tsx
<PeacockProvider theme="dark">
  <App />
</PeacockProvider>
```
