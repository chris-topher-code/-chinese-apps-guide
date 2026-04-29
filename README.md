# Chinese Apps Guide

A redesigned static website for helping foreigners understand the essential apps for daily life in China.

Original project reference:

https://github.com/chris-topher-code/-chinese-apps-guide

## What This Version Does

This version keeps the original idea of a Chinese app directory, but reframes it as a practical first-week guide for travelers, students, business visitors, and new residents.

It includes:

- Mobile-first travel-guide inspired interface.
- Warm paper texture, red stamp accents, and editorial typography.
- English/French language toggle.
- Curated starter stacks for arrival, payments, transport, food, shopping, student life, and long stays.
- Search by app name, Chinese name, task, category, or setup tip.
- Category filters.
- Full original app coverage from the upstream project, plus Dianping.
- Duplicate concepts are folded together where it helps users: WeChat Pay is covered inside WeChat instead of appearing as a second WeChat card.
- Practical app cards with real remote app icons, setup badges, and fallback initials.
- Detail dialogs with setup steps, cautions, similar Western apps, and use cases.
- Platform prompt for opening iOS App Store search, CoolAPK search, or a web search.
- Soft page, card, and starter-pack animations with reduced-motion support.
- No build step and no dependencies.

## Files

```text
index.html
styles.css
app.js
README.md
README.fr.md
README.zh.md
```

## How to Run

Open `index.html` directly in a browser.

For a local server:

```bash
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Design Direction

The UI is designed to feel like a practical China field guide rather than a generic app directory.

Core design ideas:

- Prioritize first-week usefulness over raw popularity.
- Show setup difficulty and foreigner-specific blockers early.
- Organize apps by real needs such as paying, getting around, ordering food, and shopping.
- Keep the original bilingual guide spirit while making the visual system more distinctive.

## Store Links

The "Get app" action prompts the user to choose a platform:

- Direct iOS App Store page when a public App Store match is available.
- CoolAPK Android search.
- Web search fallback.

Android and web actions intentionally open searches instead of pretending every direct listing is permanent. App store availability, regional access, and download rules can change.

## App Icons

The app cards point to public App Store artwork URLs where available. If a remote icon fails to load, the interface falls back to the local initial-style icon so the layout remains stable.

## Upstream Compatibility

The app list keeps the original project coverage instead of narrowing the scope. It also adds Dianping, treats WeChat as both social and payment-related, folds WeChat Pay into WeChat to avoid duplicate cards, and labels 携程 as Ctrip for the China-focused app context.
