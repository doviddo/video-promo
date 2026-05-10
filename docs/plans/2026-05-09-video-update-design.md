# Design Doc: Track-App Promo Video Update (2026-05-09)

## Goal
Optimize the promotional video for higher conversion and better visual quality by using real app footage and improving scene transitions.

## Scene 0: The Hook (0.0s - 1.5s)
- **Visuals**: Full-screen video playback of `assets/er.mp4` (iPhone with app interface and logo).
- **Subtitles**: None.
- **Animation**: Subtle scale-up during playback, followed by a rapid zoom-out "explosion" transition into Scene 1.
- **Audio**: Clean app startup sound or high-energy riser beginning.

## Scene 1: The Pain (1.5s - 4.5s)
- **Visuals**: Dark red background with repeating diagonal patterns.
- **Elements**: 
    - Main "PayPal HOLD" card in the center (z-index: 10).
    - "Rain" of notifications (Stripe restricted, Chargebacks, Support) spawning randomly behind the main card (z-index: 0).
- **Subtitles**: "PAYPAL HOLDS? FUNDS FROZEN?" (Snappy pop-in style).
- **Animation**: PayPal card drops in from top; notifications fly in with back ease.

## Scene 2: The Secret (4.5s - 8.0s)
- **Visuals**: Clean light background with Track-App Dashboard.
- **Subtitles**: "THE SECRET? TRACK-APP GENERATES MOVEMENT."
- **Animation**: Dashboard card slides in; "Generate" button click simulation.

## Scene 3: The Magic (8.0s - 12.5s)
- **Visuals**: Interactive map with shipping route Shenzhen -> London.
- **Subtitles**: "SIMULATE LOGISTICS. GET PAID NOW."
- **Animation**: Route line draws; marker moves along the line; status bar fills up.

## Scene 4: Finale (12.5s - 16.5s)
- **Visuals**: High-contrast logo with tagline.
- **Subtitles**: "TRACK-APP. YOUR CHEAT CODE. START FREE."
- **Animation**: Logo pops and rotates with back ease.

## Technical Details
- **Source**: `g:/Projects/video-promo/track-app/v2/index.html`
- **Engine**: HyperFrames (GSAP-based)
- **Duration**: 16.5 seconds
