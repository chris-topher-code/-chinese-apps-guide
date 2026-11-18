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
- Shareable deep links for sections and filters, such as `#basics`, `#payments`, `#transport`, and `#tips`.
- Responsive two-column app grid on wide screens, scroll-snap starter packs, and a first-week tips section.
- Full original app coverage from the upstream project, plus Dianping and TenPayGo.
- AI and search picks: Tencent Yuanbao (Hunyuan + DeepSeek, live translation), DeepSeek, Kimi, Doubao, and Bing as a Google replacement.
- Rental and transport additions: Ziroom, Wellcee, Trip.com, and HelloBike (also available inside Alipay). Arrival Basics now uses Yuanbao instead of 12306 and Trip.com instead of Ctrip.
- VPN picks for 2026: Mullvad (technically best but harder for non-tech users), Astrill (stable but sometimes slow; recommended for most), and Surfshark (easy and cheap, No Border mode, not 100% reliable).
- Power-bank warning: power banks without CCC certification are not allowed on flights in China and are confiscated permanently at the airport.
- Duplicate concepts are folded together where it helps users: WeChat Pay is covered inside WeChat instead of appearing as a second WeChat card.
- A prominent Wise/Revolut recommendation for linking a foreign card in both WeChat Pay and Alipay.
- Practical app cards with real remote app icons, setup badges, and fallback initials.
- Detail dialogs with setup steps, cautions, similar Western apps, and use cases.
- Platform prompt for opening direct iOS App Store pages, Android listing/search pages, or a web search.
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
- Android listing/search page.
- Web search fallback.

Android and web actions intentionally avoid raw APK file downloads. Store listings and official search results are safer for a public guide because app availability, regional access, and download rules can change.

## App Icons

The app cards point to public App Store artwork URLs where available. If a remote icon fails to load, the interface falls back to the local initial-style icon so the layout remains stable.

## Upstream Compatibility

The app list keeps the original project coverage instead of narrowing the scope. It also adds Dianping and TenPayGo, treats WeChat as both social and payment-related, folds WeChat Pay into WeChat to avoid duplicate cards, and labels 携程 as Ctrip for the China-focused app context.
