# 🎬 Design Doc: Track-App Promo V2 "The Spartan Cut"

**Objective:** Create a high-conversion, 15-second viral promo with minimal text and maximum impact.
**Status:** Approved by USER

## 📝 Script & Overlay Flow

| Time (s) | Scene | On-Screen Text (Large) | Audio / Effects |
| :--- | :--- | :--- | :--- |
| **0.0 - 3.0** | **Scene 1 (Pain)** | `MONEY HOLDS?` | Deep rumble + Heartbeat sound |
| **3.0 - 6.0** | **Scene 2 (Secret)** | `FIX IT.` | High-speed "Whoosh" |
| **6.0 - 8.0** | **Scene 2 (Admin)** | `GENERATE MOVEMENT.` | Mechanical click (on button press) |
| **8.0 - 11.5** | **Scene 3 (Map)** | `KEEP YOUR FUNDS.` | Data processing (beeps) |
| **11.5 - 15.0** | **Scene 4 (Finale)** | `START FREE.` | Cash register (Cha-ching!) |

## 🎨 Visual Identity
- **Palette:** Dark Red (Pain) -> White/Slate (Action) -> Deep Navy/Orange (Result).
- **Typography:** Space Grotesk (Boldest weight).
- **Layout:** Global URL `www.track-app.io` always visible at the bottom (but smaller than the main text).

## 🎙️ Voiceover (VO) Script

- **0.0 - 3.0s:** "Устали от холдов PayPal? Деньги заморожены на 21 день из-за плохого трекинга?"
- **3.0 - 6.5s:** "Есть секрет. Track-App создает легитимное движение ваших посылок в реальном времени."
- **6.5 - 11.5s:** "Мы симулируем логистику по всему миру. Платежки видят активность — вы получаете свои выплаты мгновенно."
- **11.5 - 15.0s:** "Track-App. Твой легальный чит-код для дропшиппинга. Начни бесплатно."

## 🛠️ Implementation Requirements (Hyperframes)
- Use `window.__timelines` for GSAP control.
- Text layers must be responsive and centered.
- Audio cues triggered via `data-time` markers.
