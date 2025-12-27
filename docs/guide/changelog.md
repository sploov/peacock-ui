# Changelog

All notable changes to this project will be documented in this file.

## [3.0.1] - 2025-12-27

### Added
- **New Components**:
  - `PeacockBreadcrumb`: Glass-morphic navigation trail.
  - `PeacockCarousel`: 3D/Parallax slider with physics-based drag interactions.
  - `PeacockDrawer`: High-performance side-sheet overlay with drag-to-dismiss.
- **Deep Glass Theme**: A major revamp to the visual system.
  - Darkened glass backgrounds (`.plumage-glass-heavy`) for better legibility.
  - Increased vibrancy of primary colors (`#6366f1` Indigo, `#22c55e` Green).
  - High-definition, subtler noise textures.

### Changed
- Refined global CSS variables for higher contrast in dark mode.
- Improved drag physics configuration for overlays.

## [3.0.0] - 2025-12-26

### Added
- **Stable Release**: Finalized the Quantum Design System for production use.
- **8 New Components**: `AlertDialog`, `ContextMenu`, `HoverCard`, `Menubar`, `Label`, `Toggle`, `Sheet`, and `Table`.
- **8 Core Components**: `Checkbox`, `RadioGroup`, `Select`, `Textarea`, `Popover`, `Progress`, `ScrollArea`, `Separator`.
- **WebGL Physics**: Added `PeacockPhysicsScene` and interactive primitives (`PhysicsPlane`, `InteractiveBox`, `InteractiveSphere`) using `@react-three/cannon`.
- **Documentation**: New interactive home page and comprehensive component guides.

### Fixed
- Fixed type conflict between Radix primitives and Framer Motion props in `AlertDialog`.
- Resolved `@react-three/cannon` resolution issues in VitePress build.

## [3.0.0-alpha.4] - 2025-12-26

### Added
- **Dynamic Theming Engine**: Support for multiple color schemes (`Quantum`, `Nebula`, `Aurora`) via CSS variables.
- **PeacockAccordion**: A motion-first accordion component with `glass`, `outline`, and `ghost` variants.
- **PeacockDropdownMenu**: A high-fidelity, glassmorphic dropdown system built on Radix UI primitives.
- Added `scheme` prop to `PeacockProvider` for global theme switching.

### Changed
- Migrated core color system to CSS variables to support runtime theming.
- Updated documentation with interactive theme switcher demo.

## [3.0.0-alpha.3] - 2025-12-26

### Added
- Added \`layoutId\` prop to **PeacockTabs** to allow scoped shared-layout animations.
- Added \`CommandSeparator\` export to **PeacockCommand**.

### Fixed
- Fixed motion conflicts when multiple **PeacockTabs** instances are present on the same page.
- Improved React-Vue bridge stability for complex dashboard layouts.

## [3.0.0-alpha.2] - 2025-12-26

### Added
- New **PeacockTabs** component with `pill`, `glass`, and `underline` variants.
- **ComponentPreview** system for high-fidelity documentation.
- Perspective utility system in Tailwind plugin (`perspective-500`, `perspective-1000`).
- Interactive **HeroDemos** on the landing page.

### Fixed
- Fixed `PeacockDock` mouse tracking by switching from `pageX` to `clientX`.
- Corrected versioning in documentation navigation.
- Standardized demo container styling.

## [3.0.0-alpha.1] - 2025-12-25

### Added
- Initial release of the **Quantum Engine**.
- Core components: `HolographicCard`, `PeacockDock`, `PeacockButton`, `FluidCard`, `PeacockInput`.
- Plumage Engine v2 (Tailwind Plugin).
- Dark-mode first design system.
- Physics-based motion integration with Framer Motion 12.
