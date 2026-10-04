# Design

## Direction

**Product signal:** a bold personal portfolio that introduces Hoàng Mỹ as a developer whose work is both considered and dependable. It treats the page as an experience and a project archive, rather than a technical CV.

## Narrative

- **Mode:** Experience.
- **Path:** entry card → identity-led hero → project archive → working point of view → capabilities → process → contact.
- **First impression:** large editorial type, a real portrait, and a sharply stated frontend/product identity establish a memorable person before the visitor evaluates details.

## Visual system

- **Grounds:** near-black `#0b0b0c`, soft paper `#f5f0e8`, dark charcoal `#151416`.
- **Signals:** vermilion `#cf271a` carries display emphasis and a clean acid-lime `#c7ff3e` carries availability and selected actions.
- **Type:** Bricolage Grotesque provides dense display character; Source Sans 3 keeps explanatory copy direct and legible. A small, restrained italic serif is used only for the hero salutation.
- **Material:** printed editorial scale, full-bleed photographic work frames, single-weight rules, and purposeful high-contrast fields. No generic product cards, glass surfaces, or decorative grids.

## Layout and behavior

- The initial entry card is an optional theatrical threshold that does not conceal the page from assistive technologies.
- The hero layers a cropped portrait and oversized background lettering inside a warm paper field; its composition shifts from a two-column portrait/editorial arrangement to a stacked mobile poster.
- Work is an uneven archive grid. Each project image is a genuine interactive control that opens a lightweight details panel, with a link to the verified project destination.
- About, capabilities, process, and contact alternate density and surface color to give the scroll a clear rhythm.
- GSAP supplies one authored entrance moment for hero lettering, portrait clipping, and the work archive; reduced-motion users receive the final readable states immediately.

## Accessibility and responsive rules

- Semantic landmarks, labelled navigation, descriptive project controls, keyboard focus treatment, real links, and a labelled project dialog are retained.
- Desktop uses generous editorial scale; tablet preserves the side-by-side hero; mobile collapses project archive and long lists into a single readable column while preserving hierarchy and touch targets.
- Text remains contrast-safe against each surface, and no interaction depends on hover.
