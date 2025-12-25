# Motion Engine

The "Secret Sauce" of Peacock UI is its physics-based motion system.

## Spring vs. Duration

Traditional UI libraries use `duration: 300ms`, which feels robotic. Peacock UI uses **Spring Physics**, where movement is defined by:

- **Stiffness**: The "snap" of the spring.
- **Damping**: The friction that prevents infinite oscillation.
- **Mass**: The weight of the element.

## Global Configuration

You can customize the physics globally via the `MotionProvider`:

```tsx
<MotionProvider 
  physics={{ 
    stiffness: 300, 
    damping: 25, 
    mass: 1 
  }}
>
  <App />
</MotionProvider>
```
