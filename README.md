# Tip Calculator App

A responsive tip calculator web application built with TypeScript and vanilla DOM manipulation.

## Live Demo

🔗 View the project : [https://dempirevlad.github.io/Tip_Calculator/]

## Overview

Enter a bill amount, select a tip percentage (or enter a custom one), and specify the number of people splitting the bill. The app instantly calculates the **tip amount per person** and the **total per person**.

## Features

- Preset tip buttons: 5%, 10%, 15%, 25%, 50%
- Custom tip percentage input
- Real-time calculation updates on every input change
- Reset button to clear all fields (only active when there is data)
- Clean, responsive layout using CSS custom properties

## Tech Stack

- **HTML5**
- **CSS3** — custom properties, flexbox, responsive design
- **TypeScript** — compiled to ES6 JavaScript
- **Google Fonts** — Space Mono

## Project Structure

```
tipCalculator/
├── index.html
├── app.ts          # TypeScript source
├── app.js          # Compiled output
├── app.d.ts        # Type declarations
├── tsconfig.json
├── images/
│   ├── logo.svg
│   └── favicon-32x32.png
└── style/
    ├── reset.css
    └── style.css
```

## Getting Started

### Run locally

Just open `index.html` in a browser — no build step required, the compiled `app.js` is already included.

### Development (TypeScript)

1. Install TypeScript globally if you haven't already:

   ```bash
   npm install -g typescript
   ```

2. Compile the TypeScript source:
   ```bash
   tsc app.ts --module ES6
   ```
   Or use the project config:
   ```bash
   tsc
   ```

## How It Works

1. Enter the **bill** amount.
2. Choose a **tip percentage** by clicking one of the preset buttons or typing a custom value.
3. Enter the **number of people** splitting the bill.
4. The **Tip Amount / person** and **Total / person** update instantly.
5. Click **RESET** to clear everything and start over.
