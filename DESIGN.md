# Design

## Direction

**Product Signal**: a premium, evidence-led personal portfolio. Each professional claim sits beside a concrete project, capability, or working-method proof. The page avoids a CV inventory and generic SaaS chrome while keeping recruiting decisions easy to make.

## Mode and narrative

- **Mode:** Experience. The work and its reasoning lead; the interface stays quiet enough to support inspection.
- **Reading path:** positioning → selected-work evidence → capabilities → working method → full-product awareness → contact.
- **Focal moment:** the hero’s display copy and portrait establish the role before the visitor reaches the project proof rail.

## Type

- **Display:** Bricolage Grotesque variable, used for display hierarchy and project titles. Dense, contemporary, and deliberately unlike the default system/Inter portfolio voice.
- **Body:** Source Sans 3 variable, used for readable explanatory copy and metadata.
- **Roles:** display title, section heading, project title, body, muted supporting copy, and small tabular metadata. Body copy stays at 16px or above; display scale is responsive and capped below 6rem on the desktop implementation.

## Colour and material

- **Ground:** tinted graphite `#11110f`, not pure black.
- **Primary text:** warm off-white `#f1eee6`.
- **Muted text:** warm stone `#a9a69e`.
- **Accent:** restrained warm yellow `#e5b90b`, reserved for emphasis, active actions, project count, and status.
- **Material:** editorial rules, photographic project frames, and high-contrast type. No decorative glass, gradient type, neon glow, nested card treatment, or badge walls.

## Layout

- Wide, editorial desktop grid with a large content field and a narrower proof rail in the hero.
- Selected work is a two-column claim-and-proof composition, not same-sized cards.
- Mobile recomposes to a single reading column, makes proof metadata static, and removes hover dependence.
- Section rules establish rhythm; quiet expanses separate dense evidence blocks.

## Motion and interaction

- GSAP uses a masked hero-copy reveal and image-frame clipping on entry to selected work.
- Motion communicates a proof becoming available, not generic scroll spectacle; native scrolling is unchanged.
- Images have a restrained hover-scale response on pointer devices.
- `prefers-reduced-motion` disables spatial movement and leaves content immediately readable.

## Accessibility and performance

- Semantic sections and labelled navigation, real email/social anchors, visible focus styling, selection/caret-adjacent browser theming, text contrast, and responsive image alt text.
- Project and portrait media use Next Image with responsive `sizes`; noncritical imagery is lazy-loaded by default.
- Project frames use captured live homepage hero imagery, link directly to the corresponding deployed projects, and avoid making unsupplied commercial claims.
