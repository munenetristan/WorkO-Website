# WorkO Website

Public marketing site for WorkO, a global piece-job marketplace connecting customers with trusted providers.

## Features

- Landing page with clear customer and provider CTAs
- How it works flows for both customer and provider journeys
- Services directory (41 services) with optional country filtering
- Coverage, contact, and download pages
- SEO metadata and OpenGraph defaults

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Environment Variables

Create a `.env.local` file from the example if you want to enable live country filtering and service availability.

```bash
cp .env.example .env.local
```

Set the API URL:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

The services page will fetch countries from `GET /countries` and services from `GET /services?country=...` when the API URL is set.

## Build

```bash
npm run build
npm run start
```

## Deployment

Deploy with any Node.js hosting platform. For Vercel, import the repo and set environment variables in the dashboard.
