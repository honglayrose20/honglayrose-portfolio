# Clean Portfolio Design System Guidelines

## General Design Principles

* **Minimalism**: Use clean layouts with generous whitespace
* **Consistency**: Maintain uniform spacing, typography, and color usage
* **Responsive**: Design mobile-first with clean breakpoints
* **Accessibility**: Ensure proper contrast and focus states
* **Performance**: Keep animations smooth and lightweight

## Color Palette

### Primary Colors
* **Orange Primary**: `#ea580c` - Main brand color for buttons and accents
* **Orange Secondary**: `#f59e0b` - Supporting color for gradients and highlights
* **Yellow Accent**: `#eab308` - Subtle accent color

### Neutral Colors
* **Background**: `#ffffff` - Clean white background
* **Foreground**: `#1a1a1a` - Primary text color
* **Muted**: `#6b7280` - Secondary text and subtle elements
* **Border**: `#e5e7eb` - Clean, minimal borders

## Typography

### Hierarchy
* **H1**: 3.5rem, bold weight, tight line-height for hero titles
* **H2**: 2.5rem, semibold weight for section headings
* **H3**: 1.875rem, semibold weight for subsections
* **H4**: 1.25rem, medium weight for card titles
* **Body**: 1rem, normal weight, relaxed line-height (1.7)
* **Small**: 0.875rem for captions and meta information

### Rules
* Use letter-spacing for large headings (-0.02em for H1, -0.01em for H2)
* Maintain consistent line-height ratios
* Use text gradients sparingly for emphasis

## Spacing System

### Section Padding
* **Desktop**: 8rem (128px) top/bottom padding
* **Mobile**: 6rem (96px) top/bottom padding
* Use `.section-padding` utility class

### Container Padding
* **Desktop**: 3rem (48px) horizontal padding
* **Mobile**: 1.5rem (24px) horizontal padding
* Use `.container-padding` utility class

## Component Guidelines

### Cards
* Clean white background with subtle shadows
* 0.5rem border radius for modern look
* Minimal borders using `--border` color
* Consistent internal padding

### Buttons
* **Primary**: Orange background (`#ea580c`), white text
* **Secondary**: Orange outline, orange text
* **Sizes**: Consistent padding (px-6 py-3 for standard)
* **Hover States**: Subtle color transitions

### Layout
* Use CSS Grid and Flexbox for responsive layouts
* Avoid absolute positioning unless necessary
* Maintain consistent grid systems across sections

## Animation Guidelines

* Use subtle fade-in and slide-up animations
* Keep animation duration between 0.3s - 0.6s
* Use ease-out timing for natural feel
* Avoid excessive or distracting animations

## Accessibility

* Maintain WCAG AA contrast ratios
* Use semantic HTML elements
* Provide focus states for all interactive elements
* Ensure keyboard navigation works properly