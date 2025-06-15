Here’s a standout project description tailored for an AI agent to execute — written with product clarity, user focus, and technical precision. It’s scoped to feel unique and useful, while keeping simplicity at its core:

🔧 Project Name: ClearTrack — Minimal Stock Profit Tracker for Everyday Investors
🎯 Goal:
Build a clean, intuitive web app that allows casual, long-term investors to track their profits over time. The app must require no spreadsheets, no trading dashboards, and no financial jargon. It should offer just the essentials: “How much have I made (or lost) on the stocks I own?”

🧑‍💼 Target User:
The average person who:
Has a few investments in major stocks or ETFs.

Buys and holds for the long-term (not a trader).

Wants to track their profits clearly without using brokerage apps or Excel.

Cares about simplicity, clarity, and peace of mind.

📦 Core Features:
Add Holdings:

User can manually enter a stock ticker, number of shares, and purchase price.

Each entry creates a new holding in their portfolio.

Live Price Tracking:

App fetches the current stock price using a free or cached financial API (e.g., Yahoo Finance API).

Calculates and displays unrealized profit/loss per holding and overall.

Profit Timeline Chart:

Line chart showing total portfolio profit/loss over time.

Tracks values daily and stores snapshots in the backend.

Portfolio Summary:

Total invested amount, current value, and profit %.

Simple performance overview (no charts with RSI/MACD/etc.).

“Calm Mode” Design:

UI must feel calm and human-first — no blinking prices or red/green noise.

Font, colors, and layout should promote ease, not urgency.

⚙️ Technical Requirements:
Frontend:
Framework: React or Svelte

Libraries: Chart.js or Recharts for visualization

Design: Mobile-first, responsive layout with clean UX (think Notion or Apple Weather aesthetics)

Backend:
Framework: FastAPI or Express.js

Database: PostgreSQL or Supabase (for auth + data storage)

External APIs: Use Yahoo Finance, Finnhub, or Twelve Data for stock prices

Scheduled job (e.g., cron or Celery Beat) to fetch and store daily price snapshots for each holding

Hosting:
Frontend: Vercel

Backend: Railway, Render, or Fly.io

Database: Supabase or PlanetScale
🔐 Bonus Features (Optional):
CSV export for tax time.

"Email me weekly update" feature.

Dark mode toggle.

Currency selector (USD, EUR, INR, etc.)

✍️ Design Principles:
No account syncing. Manual input only, by design.

Show what matters: How am I doing? How has my investment grown?

One chart. One goal. No clutter.

🪪 Project Identity:
“ClearTrack is the meditation app of investing. One place to reflect on how your money’s growing — without the noise.”