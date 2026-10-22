# Statly landing page

Static landing page for **Statly**, a phone-first step counter with estimated sleep, streaks, badges and widgets for Android (no watch needed), served by GitHub Pages:
**https://ahaariyan.github.io/staly_health_app_landing_page/** (repo `AHAariyan/staly_health_app_landing_page`).

- `index.html`, `styles.css`: the whole page. No build step, no frameworks, no web fonts, no trackers. All paths are relative.
- `assets/play.js`: the only script; it switches the Play buttons (see below).
- `assets/`: real app screenshots from the emulator (`s-*.webp`, status bar kept, nav bar cropped), the real Today widget
  (`w-real.webp`), two widget designs (`w-streak.webp`, `w-week.webp`, labelled "Design"), icons and favicons from the
  Calm stones icon, and `og-statly.jpg` (1200x630 link preview; re-render it from `og-share.html`, the command is in that file).
- `docs/`: full-page renders at 1440 px (desktop) and 390 px (mobile).
- Privacy policy: https://ahaariyan.github.io/staly_health_app_privacy_policy/

## Switching on the Google Play link

There is no Play listing yet, so every Play button reads "Coming soon" and goes nowhere. When the listing is live:

1. Open `assets/play.js` and set the one line
   `const PLAY_URL = 'https://play.google.com/store/apps/details?id=YOUR.PACKAGE.NAME';`
2. Bump `?v=1` on the `play.js` script tag in `index.html` so browsers fetch the new file.

Every element with `data-play` then becomes a real link labelled "Get it on Google Play" ("Get the app" in the header),
and any `utm_*` tags on the page URL are passed to Play's `referrer`. To do it without JavaScript instead, search
`index.html` for `TODO(play-link)`, give each `data-play` link an `href`, remove `aria-disabled` and change the label.

## Copy rules

- Phone-first: Statly works with the phone alone. A watch is only ever an optional extra ("Have a watch? Bring it along").
- Never name a brand (watch makers, fitness apps, phone makers). Say "your watch" or "your tracker".
  Health Connect may be named. "Google Play" appears only on the store buttons.
- No medical claims. Sleep, distance and calories are always called estimates.
- Honest only: designs are labelled "Design", real screenshots "Real screenshot".
- Prices are marked as subject to change until launch.
