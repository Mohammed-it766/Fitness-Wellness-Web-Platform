# Fitness and Wellness Web Platform

**Product name:** VitalForm  
**Current phase:** Week 6 - Strength Phase  
**Primary goal:** Build strength, improve conditioning, track nutrition, and maintain recovery habits.

## Current App Status

The project is now set up as a Vite React application. The interactive dashboard runs from `src/App.jsx`, with Vite serving the app through `index.html`.

**Local dev URL:** `http://127.0.0.1:5173`

### Tech Stack

| Area | Tooling |
| --- | --- |
| Frontend | React |
| Build tool | Vite |
| Package manager | npm |
| Runtime | Node.js |
| Entry HTML | `index.html` |
| React entry | `src/main.jsx` |
| Main UI | `src/App.jsx` |

### Project Files

| Path | Purpose |
| --- | --- |
| `package.json` | npm scripts and dependencies |
| `package-lock.json` | locked dependency versions |
| `index.html` | Vite HTML entry and visible fallback while React loads |
| `src/main.jsx` | React mount point and error boundary |
| `src/App.jsx` | VitalForm dashboard UI |
| `.gitignore` | ignores `node_modules`, `dist`, env files, and local Vite logs |
| `Fitness-Wellness-Web-Platform.md` | Markdown project documentation |
| `JS` | original source file kept for reference |

### Commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

Use `npm run dev` during development, then open:

```text
http://127.0.0.1:5173
```

Do not open `index.html` directly from the file system. The app must be served through Vite.

### Latest Fixes Applied

- Added Vite React project setup.
- Moved runnable UI into `src/App.jsx`.
- Added `src/main.jsx` React entry point.
- Added `index.html` with a visible fallback state.
- Added an error boundary so render failures show a visible error instead of a blank page.
- Fixed missing `React` imports in both `src/App.jsx` and `src/main.jsx`.
- Made sections visible by default instead of relying on `IntersectionObserver` before first paint.
- Added a dark background to `index.html` before React mounts.
- Removed an unsupported inline `@media` style from the nav.
- Verified `npm run build` passes.
- Verified in Chrome/Puppeteer that the dashboard renders.

## Navigation

- Dashboard
- Workouts
- Nutrition
- Progress
- Community

## Dashboard Summary

Personalized workouts, smart nutrition tracking, and recovery insights in one platform built for real results.

### Today's Key Metrics

| Metric | Current | Target / Notes |
| --- | ---: | --- |
| Goal progress | 74% | Daily activity target |
| Calories burned | 2,847 kcal | Target: 3,200 kcal |
| Active time | 47 min | Movement completed today |
| Steps | 8,214 | Daily step count |
| Resting heart rate | 62 bpm | Recovery indicator |
| Sleep | 7.4 hrs | Last night's sleep |

## Today's Workout

**Recommended action:** Start today's workout.

Suggested prompt:

```text
Show me a personalized 7-day workout plan
```

## Programs

### Active Programs

| Program | Status | Progress | Frequency | Suggested Prompt |
| --- | --- | ---: | --- | --- |
| Power Hypertrophy | Active | Day 18 of 30, 60% | 4x / week | Show me details for the Power Hypertrophy program |
| Mobility & Flex | Active | Day 5 of 21, 23% | Daily | Tell me about the mobility and flexibility program |
| Sprint & Cardio | Active | Day 12 of 28, 43% | 3x / week | Show me the sprint and cardio program details |

## Nutrition Tracker

**Today's fueling:** 2,140 of 2,800 kcal consumed.  
**Status:** On track for the surplus goal.

### Macros

| Macro | Current | Progress |
| --- | ---: | ---: |
| Protein | 164 g | 82% |
| Carbs | 218 g | 61% |
| Fat | 64 g | 71% |
| Fiber | 22 g | 55% |

### Today's Meals

| Meal | Time | Calories |
| --- | --- | ---: |
| Protein Oat Bowl | Breakfast, 7:30 AM | 487 |
| Grilled Chicken Salad | Lunch, 12:15 PM | 612 |
| Whey Protein Shake | Snack, 3:00 PM | 210 |
| Dinner | Not logged | ~831 kcal remaining |

Suggested dinner prompt:

```text
Suggest a healthy dinner for muscle gain with around 700 calories
```

## Weekly Schedule

| Day | Date | Sessions |
| --- | ---: | --- |
| Mon | 28 | None |
| Tue | 29 | Scheduled |
| Wed | 30 | Scheduled |
| Thu | 1 | Active day |
| Fri | 2 | None |
| Sat | 3 | None |
| Sun | 4 | None |

### Thursday Agenda

| Time | Session | Focus | Duration |
| --- | --- | --- | ---: |
| 6:00 AM | Morning Mobility Flow | 15-min warm-up, full body | 15 min |
| 7:00 AM | Chest & Triceps - Hypertrophy A | Power Hypertrophy, Day 18 | 55 min |
| 12:00 PM | Zone 2 Walk / Light Cardio | Active recovery, low intensity | 30 min |
| 9:00 PM | Evening Stretch & Wind Down | Sleep prep, parasympathetic recovery | 20 min |

## Progress Snapshot

| Item | Value |
| --- | ---: |
| Transformation week | 6 of 12 |
| Current streak | 14 days |
| Daily calorie burn progress | 74% |
| Calories left to burn | 353 kcal |
| Calories left to eat | 660 kcal |

Suggested progress prompt:

```text
Give me a full analysis of my fitness progress and what I should focus on next
```

## Platform Feature Ideas

- Personalized workout planning
- Program progress tracking
- Nutrition and macro tracking
- Meal logging and meal suggestions
- Weekly training schedule
- Recovery tracking through sleep and heart rate
- Community challenges and accountability

## Markdown Notes

This file is written as standard Markdown. It avoids embedded HTML, CSS, and JavaScript so it works in common Markdown renderers such as:

- GitHub preview
- VS Code Markdown preview
- Documentation sites
- Static Markdown parsers

The interactive dashboard lives in the React app, not in this Markdown file.
