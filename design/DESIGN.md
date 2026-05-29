---
name: Luminal Developer Pro
colors:
  surface: '#19120a'
  surface-dim: '#19120a'
  surface-bright: '#40382e'
  surface-container-lowest: '#130d06'
  surface-container-low: '#211a12'
  surface-container: '#251e16'
  surface-container-high: '#302920'
  surface-container-highest: '#3c332a'
  on-surface: '#eee0d2'
  on-surface-variant: '#d7c3ae'
  inverse-surface: '#eee0d2'
  inverse-on-surface: '#372f26'
  outline: '#9f8e7a'
  outline-variant: '#524534'
  surface-tint: '#ffb955'
  primary: '#ffc880'
  on-primary: '#452b00'
  primary-container: '#f5a623'
  on-primary-container: '#644000'
  inverse-primary: '#835500'
  secondary: '#c5c1f5'
  on-secondary: '#2d2b55'
  secondary-container: '#464470'
  on-secondary-container: '#b7b3e6'
  tertiary: '#9bd9ff'
  on-tertiary: '#00344a'
  tertiary-container: '#3ac2ff'
  on-tertiary-container: '#004d6a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffddb4'
  primary-fixed-dim: '#ffb955'
  on-primary-fixed: '#291800'
  on-primary-fixed-variant: '#633f00'
  secondary-fixed: '#e3dfff'
  secondary-fixed-dim: '#c5c1f5'
  on-secondary-fixed: '#18163f'
  on-secondary-fixed-variant: '#44426d'
  tertiary-fixed: '#c4e7ff'
  tertiary-fixed-dim: '#7cd0ff'
  on-tertiary-fixed: '#001e2c'
  on-tertiary-fixed-variant: '#004c69'
  background: '#19120a'
  on-background: '#eee0d2'
  surface-variant: '#3c332a'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 64px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 40px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.05em
  button:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 120px
---

## Brand & Style

The design system is engineered for a high-end developer portfolio that balances technical rigors with creative flair. The brand personality is **Visionary, Technical, and Polished**, targeting tech recruiters and potential clients who value both code quality and aesthetic precision.

The visual style is a fusion of **Glassmorphism** and **Modern Dark UI**. It utilizes deep violet-black foundations to provide a canvas for vibrant, golden accents. The aesthetic relies on depth created through frosted translucent layers and neon-inspired "glow" states, evoking a futuristic, IDE-adjacent atmosphere that feels native to a developer’s ecosystem.

## Colors

The palette is built on a dark mode hierarchy. The primary background uses a deep violet-black to minimize eye strain and maximize the pop of accent colors. 

- **Primary Accent (#f5a623):** Reserved for primary actions, highlight headings, and interactive states. It represents the "spark" of logic and creativity.
- **Surface Layers:** The secondary background and card colors are tiered to create depth, using medium violets to distinguish content containers from the main canvas.
- **Glassmorphism:** Overlays use semi-transparent variations of the surface colors with a `backdrop-filter: blur(12px)` to maintain legibility while showcasing the background gradients.
- **Interactive Glow:** Hover states on interactive elements should implement a `box-shadow` or `border-color` transition using the golden primary accent with a soft spread (10px-20px) to simulate a neon effect.

## Typography

This design system employs a three-font strategy to balance impact, readability, and technical identity:
- **Headlines:** Uses **Hanken Grotesk** for a sharp, contemporary look. High-weight display sizes should use tighter letter-spacing to feel more "designed."
- **Body:** **Inter** provides maximum legibility for project descriptions and professional experience summaries.
- **Technical/Labels:** **JetBrains Mono** is used for tags, technology stacks, and small UI metadata to reinforce the developer-centric nature of the portfolio.

**Scaling:** On mobile devices, display type scales down aggressively to maintain layout integrity, while body text remains consistent for accessibility.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a max-width of 1200px for optimal readability on ultra-wide monitors, while fluidly adapting down to mobile breakpoints.

- **Grid:** A 12-column grid is used for desktop project galleries. On tablets, this collapses to 2 columns, and on mobile, a single column stack.
- **Rhythm:** An 8px linear scale governs all padding and margins. 
- **Sectioning:** Generous vertical spacing (120px+) is used between major sections (Experience, Projects, Contact) to create a premium, editorial feel that allows the glassmorphic elements "room to breathe."
- **Safe Areas:** Cards use a consistent inner padding of 32px (4 units) to ensure content never feels cramped against the glowing borders.

## Elevation & Depth

Depth is achieved through **Tonal Layering and Glassmorphism** rather than traditional shadows.

1.  **Floor:** The base background (#1a1a2e) with subtle radial gradients of deep violet.
2.  **Surface:** Cards and blocks (#252445) with a 60% opacity and `backdrop-filter: blur(16px)`.
3.  **Highlights:** Elements in the foreground use a 1px inner border (stroke) with a low-opacity white (10%) to define the "glass" edges.
4.  **Interaction:** Upon hover, the elevation is signaled by the "Golden Glow"—a transition from the subtle border to a vibrant #f5a623 stroke accompanied by an outer glow with a 15px blur radius.

## Shapes

The design system utilizes **Rounded** geometry (0.5rem base) to soften the technical aesthetic and make the UI feel more approachable and modern.

- **Cards:** Use `rounded-xl` (1.5rem / 24px) to create a friendly, modern container for project screenshots.
- **Buttons:** Use a hybrid approach: primary buttons are fully rounded (pill-shaped) for high prominence, while secondary buttons and input fields follow the `rounded-lg` (1rem / 16px) standard.
- **Icons:** Tech stack icons should be contained within circular or soft-square frames to maintain a uniform visual rhythm in the "Skills" section.

## Components

### Buttons
- **Primary:** Solid #f5a623 background with dark text. No shadow in rest state; intense golden glow on hover.
- **Secondary:** Transparent background with a 1.5px border of #f5a623. Text matches the border color.
- **Glass Action:** Semi-transparent #ffffff (10%) background with backdrop blur. Used for secondary project links (e.g., "Source Code").

### Cards (Projects/Experience)
- **Structure:** 24px padding, 1.5rem corner radius, and a subtle 1px border. 
- **Hover State:** The border transitions to the primary accent color, and the background opacity increases slightly.
- **Media:** Project images inside cards should have a 12px corner radius and a slight darken overlay to ensure text overlays are legible.

### Chips/Tags (Tech Stack)
- **Style:** Small JetBrains Mono text.
- **Appearance:** Deep violet background with a subtle border. For primary skills, use a low-opacity version of the primary accent (#f5a623 at 15%) as the background.

### Input Fields
- **Style:** Dark, semi-transparent backgrounds with "bottom-border only" or "full-outline" variants. Focus state triggers the golden glow effect on the border.

### Experience Timeline
- **Visual:** A vertical 2px line in #2d2b55. Active nodes or current roles are highlighted with a glowing #f5a623 circle.