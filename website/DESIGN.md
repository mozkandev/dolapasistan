---
name: Dolap Asistan Website
description: Turkish marketing identity for the Dolap Asistan desktop product.
colors:
  ink: "#192132"
  gold: "#c9a45c"
  gold-light: "#edcf94"
  gold-surface: "#f2e5c9"
  paper: "#f8f9f7"
  muted: "#5e6570"
  line: "#dedfd9"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(46px, 4.6vw, 65px)"
    fontWeight: 600
    lineHeight: 1.09
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Sora, sans-serif"
    fontSize: "clamp(32px, 3.3vw, 44px)"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-.04em"
  title:
    fontFamily: "Sora, sans-serif"
    fontSize: "22px"
    fontWeight: 600
    letterSpacing: "-.03em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "13px"
    fontWeight: 800
    lineHeight: 1.4
rounded:
  control: "8px"
  card: "12px"
  panel: "14px"
spacing:
  section: "104px"
  section-tablet: "75px"
  section-mobile: "61px"
  panel-gap: "22px"
components:
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "17px 23px"
  button-gold:
    backgroundColor: "{colors.gold-light}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "17px 23px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "17px 23px"
  price-card:
    backgroundColor: "#f9faf7"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "32px 23px"
  price-card-featured:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.white}"
    rounded: "{rounded.card}"
    padding: "32px 23px"
---

# Design System: Dolap Asistan Website

## Overview

**Creative North Star: "The Product Workbench"**

Dolap Asistan keeps the product's operational navy and warm gold identity on a light, cool paper canvas. Sora headings establish clear decisions; Manrope makes Turkish explanatory copy and controls approachable.

Tonal panels carry most of the structure. Soft shadows belong to lifted product illustrations and selected controls, while rounded rectangles and fine dividers keep the wider page orderly.

Scope: this website only. Extracted from `index.html`, `src/style.css`, and `src/main.js`; inherited brand commitments are in `../PRODUCT.md`. Page strategy lives in `.impeccable/surfaces/index.md`.

**Key Characteristics:**

- Operational navy with warm gold emphasis.
- Open page spacing around compact product evidence.
- Precise rounded controls and locally served typography.

## Colors

Warm gold accents sit against operational navy and cool neutral surfaces. Frontmatter values preserve the implementation's hex tokens.

- **Primary — Ink:** body text, dark actions, product sidebar, video section, featured plan.
- **Primary — Gold family:** light gold for highlighted actions and selected emphasis; deeper gold for borders; pale gold for feature panels.
- **Neutral — Paper / White:** page canvas and lifted or selected surfaces.
- **Neutral — Muted / Line:** supporting text and quiet separation.

**The Contrast Rule.** Gold action surfaces carry dark ink labels; dark surfaces carry white or light gold labels.

## Typography

The display and headline roles describe desktop defaults. The hero changes at the implemented breakpoints, reaching a mobile clamp of 37–57px; its desktop size must not be imposed on narrow screens. Explanatory text generally uses 14px, with the hero introduction at 16px. Compact navigation and plan metadata use smaller supporting sizes.

Brand lettering uses Manrope with -.04em tracking and differentiated weights. Pricing uses Sora with tabular numeric alignment. Both font families are served locally. Dense text inside the product miniature is illustrative and is not a reusable reading-text role.

## Layout

The centered desktop container caps at 1240px with 48px side gutters. Gutters reduce to 32px at 1150px, 20px at 600px, and 16px at 360px. Section spacing follows the frontmatter's desktop, tablet, and mobile values.

At 900px navigation collapses and the hero becomes a single column. At 600px feature, video, pricing, onboarding, and FAQ compositions stack. Preserve the site's 320px minimum width. Grids use flexible tracks with zero minimum widths where product imagery needs to shrink.

Pricing shows Free, Starter, Pro, and Business in four columns, switches to two columns at 1150px, and one column at 600px. The desktop header keeps a contact text link beside the dark download action; mobile navigation includes the same download action.

## Elevation & Depth

Paper, pale green-gray, pale gold, and navy panels create most separation without shadows. The product window and queue illustration use diffuse shadows and slight rotation; the video play control and selected billing period have smaller shadows. Exact shadows and motion are recorded in the sidecar.

**The Depth Rule.** Reserve lifted treatment for product evidence and interactive emphasis; ordinary content panels stay tonal.

## Shapes

Controls have precise soft corners; larger content panels increase the radius slightly. Circular play controls and numbered steps contrast with rectangular cards. Dividers are fine one-pixel strokes. Icons are inline SVG strokes with rounded caps and joins, including the mobile contact arrow.

## Components

- **Buttons:** solid navy, light gold, and outlined variants. Hover lifts by 2px and changes fill; keyboard focus uses a 3px ochre outline with 5px offset. Text links underline on hover.
- **Navigation:** opaque sticky paper header with a bottom divider. Mobile uses a labeled 44px menu control; links, outside click, Escape, and returning to desktop close the menu.
- **Cards and tags:** pale plan cards surround a navy featured plan; the featured audience tag uses light gold on a dark neutral background. Feature panels use larger rounded tonal surfaces.
- **Flow controls:** three numbered controls expose selected state with a filled dark number and a pale background. They update the labeled product example and preserve `aria-pressed`.
- **Billing control:** two buttons in a rounded neutral track; the selected period has a white fill and small shadow. Prices use Turkish number formatting and announce period changes.
- **Free plan:** follows the existing pale plan-card design. Its price and free-use caption stay unchanged when billing changes. The action is “Uygulamayı indir” with the shared download SVG, pointing to the fixed user-specified GitHub release asset.
- **FAQ:** native details/summary rows separated by rules; the plus icon rotates on expansion. Multiple answers can remain open.
- **Video:** local poster with a circular play button; clicking inserts the supplied YouTube embed. The direct YouTube link remains available.

Motion uses short state transitions and a single product-window arrival. Reduced-motion preference disables animations, transitions, and smooth scrolling.

## Do's and Don'ts

- Do use Sora for major headings and Manrope for explanatory text and controls.
- Do pair gold surfaces with dark ink text and preserve visible keyboard focus.
- Do preserve reduced-motion behavior and the shared inline SVG icon language.

- Don't turn miniature preview text into the normal reading scale.
- Don't add floating shadows to every card; preserve the observed hierarchy of depth.
- Don't use decorative gold as ordinary paragraph text on paper.
