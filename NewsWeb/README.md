# 📰 Daily Digest

> A modern news aggregation website that delivers personalized global news through a clean, distraction-free interface.

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![Express](https://img.shields.io/badge/Express-4.x-blue)
![License](https://img.shields.io/badge/license-MIT-yellow)

---

## 📖 Table of Contents

- [Executive Summary](#-executive-summary)
- [Architecture Overview](#-architecture-overview)
- [Setup Guide](#-setup-guide)
- [Usage Guide](#-usage-guide)
- [Configuration](#-configuration)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [FAQ & Troubleshooting](#-faq--troubleshooting)
- [License & Credits](#-license--credits)

---

## 🎯 Executive Summary

**Daily Digest** is a full-stack web application built with Node.js and Express that aggregates news articles from around the world using the [NewsAPI](https://newsapi.org). Users can filter news by category (Technology, Business, Sports, Health, Science, Entertainment), region, and custom keywords, all presented in a clean, reader-focused interface.

This project was created as a learning exercise to demonstrate practical skills in server-side rendering, third-party API integration, and modern UI/UX principles. It serves as a solid foundation for anyone starting their journey with the Express.js ecosystem, showcasing core concepts like routing, templating with EJS, form handling, and error management, all in a real-world context, this project have the support by AI is claude and google stitch, claude help to organize the file code and stitch to create UI.

---

## 🏗️ Architecture Overview

### High-Level Flow

```
┌─────────────────────────────────────────────────────────┐
│                     USER'S BROWSER                       │
│  ┌──────────────────────────────────────────────────┐   │
│  │ Trang chủ (GET /) → Form submission (POST /news) │   │
│  │              Click navbar → GET /category/:name  │   │
│  └──────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────┘
                         │ HTTP Request
                         ▼
┌─────────────────────────────────────────────────────────┐
│                EXPRESS.JS SERVER (index.js)              │
│  ┌────────────────────────────────────────────────┐     │
│  │  Routes Handler                                │     │
│  │  • GET /               → Render index.ejs      │     │
│  │  • POST /news          → Fetch + render        │     │
│  │  • GET /category/:name → Fetch + render        │     │
│  └──────────────────┬─────────────────────────────┘     │
└─────────────────────┼───────────────────────────────────┘
                      │ Axios HTTP Client
                      ▼
┌─────────────────────────────────────────────────────────┐
│                   NEWSAPI (External)                     │
│  • /v2/top-headlines  (category + country)              │
│  • /v2/everything     (keyword search, global)          │
└─────────────────────────────────────────────────────────┘
                      │ JSON Response
                      ▼
┌─────────────────────────────────────────────────────────┐
│              EJS TEMPLATE ENGINE                         │
│  • views/index.ejs    → Home page                       │
│  • views/results.ejs  → News listing                    │
│  • views/partials/*   → Shared navbar & footer          │
└─────────────────────────────────────────────────────────┘
                      │ HTML Response
                      ▼
                  USER'S BROWSER
```

### Project Structure

```
NewsWeb/
│
├── public/                    # Static assets (served as-is)
│   ├── styles/
│   │   └── main.css           # All styles (reset, layout, components, responsive)
│   └── images/                # Optional images
│
├── views/                     # EJS templates
│   ├── partials/
│   │   ├── header.ejs         # Shared navbar + <head>
│   │   └── footer.ejs         # Shared footer + closing tags
│   ├── index.ejs              # Home page with search form
│   └── results.ejs            # News listing page
│
├── index.js                   # Main server file (Express app + routes)
├── package.json               # Dependencies + scripts
├── .env                       # API keys (never commit this!)
├── .gitignore                 # Files to exclude from Git
└── README.md                  # You are here
```

### Core Modules

| Module | Purpose |
|--------|---------|
| **Express** | Web framework — handles HTTP routing and middleware |
| **Axios** | Promise-based HTTP client for calling NewsAPI |
| **EJS** | Template engine that renders dynamic HTML |
| **dotenv** | Loads environment variables from `.env` file |
| **nodemon** (dev) | Auto-restarts the server on file changes |

### Request Flow Example

When a user clicks "Technology" in the navbar:

1. Browser sends `GET /category/technology`
2. Express router matches the route and extracts `technology` as a param
3. Axios calls `https://newsapi.org/v2/everything?q=technology&...`
4. The response is filtered to remove articles without images or marked as `[Removed]`
5. EJS renders `results.ejs` with the filtered articles
6. Rendered HTML is sent back to the browser

---

## 🚀 Setup Guide

### Prerequisites

Before you begin, make sure you have the following installed:

| Tool | Version | Why? |
|------|---------|------|
| **Node.js** | 18.x or higher | Runtime environment |
| **npm** | 9.x or higher | Package manager (comes with Node.js) |
| **Git** | Any recent | To clone the repository |
| A code editor | VS Code recommended | For editing files |

Check your versions:

```bash
node --version   # Should output v18.x or higher
npm --version    # Should output 9.x or higher
```

### 1. Get a Free NewsAPI Key

1. Go to [https://newsapi.org](https://newsapi.org)
2. Click **"Get API Key"** and register (free tier is enough)
3. Copy your API key — you'll need it in the next step

> ⚠️ **Note:** The free tier allows 100 requests/day and only works on `localhost`.

### 2. Clone the Repository

```bash
git clone https://github.com/your-username/NewsWeb.git
cd NewsWeb
```

### 3. Install Dependencies

```bash
npm install
```

This installs all packages listed in `package.json`:
- `express`, `axios`, `ejs`, `dotenv` (production)
- `nodemon` (development only)

### 4. Configure Environment Variables

Create a `.env` file in the project root:

```bash
touch .env
```

Open it and add:

```env
NEWS_API_KEY=your_api_key_here
PORT=3000
```

Replace `your_api_key_here` with the key you got from NewsAPI.

### 5. Run the Server

**Development mode** (auto-reload on changes):

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

You should see:

```
Server đang chạy tại http://localhost:3000
```

### 6. Open in Browser

Navigate to [http://localhost:3000](http://localhost:3000) — you should see the Daily Digest home page. 🎉

---

## 📚 Usage Guide

### Home Page

The home page features a hero section with a search form. Users can:

1. **Select a topic** from the dropdown (Technology, Business, Sports, etc.)
2. **Select a region** (United States, United Kingdom, Vietnam, etc.)
3. **Enter an optional keyword** (e.g., "AI", "climate change")
4. Click **"Get News"** or press **Enter** to submit

### Navbar Navigation

Clicking any category in the navbar (Politics, Technology, Culture, Business, Science) fetches **global news** for that topic without any country filter. The active category is highlighted with an underline.

### API Endpoints

| Method | Endpoint | Description | Body / Params |
|--------|----------|-------------|---------------|
| `GET` | `/` | Home page | — |
| `POST` | `/news` | Search news with filters | `category`, `country`, `keyword` |
| `GET` | `/category/:name` | Get global news by category | URL param: `name` |

### Example: cURL Test

```bash
# Get the home page
curl http://localhost:3000/

# Get technology news (global)
curl http://localhost:3000/category/technology

# Submit form
curl -X POST http://localhost:3000/news \
  -d "category=business&country=us&keyword=stocks"
```

---

## ⚙️ Configuration

### Environment Variables

All configuration lives in `.env`:

| Variable | Required | Default | Description |
|----------|----------|---------|-------------|
| `NEWS_API_KEY` | ✅ Yes | — | Your API key from newsapi.org |
| `PORT` | ❌ No | `3000` | Port the server listens on |

### Secrets Handling

🔒 **Never commit your `.env` file to Git!** Make sure `.env` is listed in `.gitignore`:

```gitignore
node_modules/
.env
*.log
```

If you accidentally commit a secret:
1. Immediately **revoke the key** at newsapi.org
2. Generate a new key
3. Update your local `.env`
4. Consider using `git filter-branch` or BFG Repo-Cleaner to remove history

### Customizing the App

Want to change the default number of articles? Edit `index.js`:

```javascript
params: {
  pageSize: 12,  // ← Change this number
  ...
}
```

---

## 🧪 Testing

### Current State

This project currently uses **manual testing** — visit the site, click through the flows, and verify results match expectations.

### Recommended Testing Strategy (Future Work)

For a more robust test suite, consider adding:

| Type | Tool | What to Test |
|------|------|--------------|
| **Unit** | Jest | Pure functions (filters, formatters) |
| **Integration** | Supertest | Route responses (status codes, rendered content) |
| **End-to-End** | Playwright or Cypress | User flows (form submission, navigation) |

### Example Integration Test (Supertest)

```javascript
import request from "supertest";
import app from "./index.js";

test("GET / returns home page", async () => {
  const response = await request(app).get("/");
  expect(response.status).toBe(200);
  expect(response.text).toContain("Daily Digest");
});
```

### Manual Test Checklist

- [ ] Home page loads without errors
- [ ] Form submission returns news results
- [ ] Each navbar category shows relevant articles
- [ ] Active navbar item is highlighted
- [ ] Error message appears when API fails
- [ ] No results message appears when filters match nothing
- [ ] Layout looks correct on mobile, tablet, desktop

---

## 🌍 Deployment

### Local Development

```bash
npm run dev
```

The server runs on `http://localhost:3000` with hot reload.

### Production Deployment

#### Option 1: Render (Recommended for beginners — free tier)

1. Push your code to GitHub
2. Go to [render.com](https://render.com) and connect your repo
3. Set environment variables in the dashboard (`NEWS_API_KEY`)
4. Render auto-detects Node.js and runs `npm start`

#### Option 2: Railway

1. Install Railway CLI: `npm i -g @railway/cli`
2. Run `railway init` in your project
3. Add env vars: `railway variables set NEWS_API_KEY=your_key`
4. Deploy: `railway up`

#### Option 3: Manual VPS

```bash
# On your server
git clone <repo>
cd NewsWeb
npm install --production
pm2 start index.js --name news-web
pm2 save
```

> ⚠️ **Important:** The free NewsAPI tier only works on `localhost`. To deploy publicly, you'll need to upgrade to a paid plan.

### CI/CD Suggestions

A simple GitHub Actions workflow (`.github/workflows/ci.yml`):

```yaml
name: CI
on: [push, pull_request]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm install
      - run: npm test  # When tests are added
```

---

## 🤝 Contributing

We love contributions! Here's how to get started.

### Branch Strategy

- `main` — Stable, deployable code
- `feature/<name>` — New features (e.g., `feature/dark-mode`)
- `fix/<name>` — Bug fixes (e.g., `fix/empty-search-crash`)

### Workflow

1. **Fork** the repository
2. **Create a branch** from `main`:
   ```bash
   git checkout -b feature/my-awesome-feature
   ```
3. **Make your changes** with clear, descriptive commits
4. **Test locally** to ensure nothing is broken
5. **Push** and open a Pull Request

### Commit Message Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add dark mode toggle
fix: handle empty NewsAPI response
docs: update installation steps
style: improve card spacing on mobile
refactor: extract API call into separate module
```

### Pull Request Checklist

Before submitting, make sure:

- [ ] Code follows the existing style
- [ ] No `console.log` left in production code
- [ ] `.env` is NOT committed
- [ ] PR description explains **what** changed and **why**
- [ ] Screenshots included for UI changes

### Code Style

- Use 2 spaces for indentation
- Use `const` by default, `let` only when reassigning
- Prefer arrow functions for callbacks
- Add comments for complex logic

---

## 🆘 FAQ & Troubleshooting

### Q: I get `TypeError: app.setup is not a function`

**A:** You probably typed `app.setup(...)` instead of `app.set(...)`. The Express method is `set`, not `setup`.

```javascript
// ❌ Wrong
app.setup("view engine", "ejs");

// ✅ Correct
app.set("view engine", "ejs");
```

### Q: I get `ReferenceError: error is not defined` in my EJS template

**A:** One of your routes doesn't pass `error` to `res.render()`. Either:
- Add `error: null` to all successful renders, OR
- Use `typeof error === 'undefined'` in your template check

### Q: The navbar shows "Không tìm thấy tin tức" but my API test returns results

**A:** You're filtering too aggressively. Articles from `/everything` endpoint often have `[Removed]` as title. Fix your filter:

```javascript
const articles = response.data.articles.filter(
  (a) => 
    a.urlToImage && 
    a.description && 
    a.title !== "[Removed]"
).slice(0, 12);
```

### Q: CSS changes don't show up in the browser

**A:** Your browser is caching the old file. Do a **hard refresh**:
- Windows/Linux: `Ctrl + Shift + R`
- Mac: `Cmd + Shift + R`

### Q: `SyntaxError: Unexpected token '%'` in EJS

**A:** This usually means a malformed EJS tag. Run:

```bash
npx ejs-lint views/your-file.ejs
```

It will tell you the exact line with the issue.

### Q: Can I deploy this for free?

**A:** Yes, you can deploy to Render or Railway, but **the free NewsAPI key only works on localhost**. For public deployment, you'll need NewsAPI's paid plan (~$449/month) or switch to a free alternative like [GNews API](https://gnews.io) or [Mediastack](https://mediastack.com).

### Q: How do I add a new category?

**A:** Edit two places:
1. `views/index.ejs` — Add a new `<option>` in the dropdown
2. `views/partials/header.ejs` — Add a new `<li>` in the navbar

### Q: Can I use this for commercial purposes?

**A:** Yes, this code is MIT licensed. However, NewsAPI's terms require a paid license for commercial use.

---

## 📄 License & Credits

### License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

```
Copyright (c) 2026 [Your Name]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

### Built With

- [Node.js](https://nodejs.org) — JavaScript runtime
- [Express.js](https://expressjs.com) — Web framework
- [Axios](https://axios-http.com) — HTTP client
- [EJS](https://ejs.co) — Template engine
- [dotenv](https://github.com/motdotla/dotenv) — Environment config
- [NewsAPI](https://newsapi.org) — News data source

### Acknowledgments

- Design inspired by modern editorial websites
- Icons from emoji and native SVG
- Fonts from [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

### Contact

Have questions? Found a bug? Open an issue or reach out:

- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

---

<div align="center">

**Built with ❤️ for learning and sharing**

⭐ If this helped you, please star the repo!

</div>
