# Multi-Agent Frontend (PWA)

Frontend application for interacting with the Multi-Agent system.
Built using **Next.js** and delivered as a **Progressive Web App (PWA)** so users can install it like a mobile app.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Progressive Web App (PWA)
* REST APIs

## Features

* 🤖 Multi-agent interaction interface
* ⚡ Fast UI powered by Next.js
* 📱 **Progressive Web App (PWA)** – installable on mobile & desktop
* 🔄 Offline support using service workers
* 📡 API integration with backend agents
* 🎨 Responsive UI for all screen sizes

## PWA Capabilities

This application works as a **Progressive Web App**, meaning:

* Users can **install the app on their device**
* Works **offline or with poor network**
* **App-like experience** on mobile and desktop
* **Service worker caching** for faster loading
* Home screen installation

## Project Structure

```
frontend
│
├── app/
├── components/
├── services/
├── hooks/
├── public/
│   ├── manifest.json
│   └── icons/
├── styles/
└── next.config.js
```

## Installation

Clone the repository

```
git clone https://github.com/bipingithubtech/multi-agent-frontend.git
cd multi-agent-frontend
```

Install dependencies

```
npm install
```

## Run Development Server

```
npm run dev
```

Open:

```
http://localhost:3000
```

## Build Production

```
npm run build
npm start
```

## Environment Variables

Create `.env.local`

```
NEXT_PUBLIC_API_URL=http://localhost:8000
```

## Backend Dependency

This frontend connects to the backend API.

Backend Repository:

```
https://github.com/bipingithubtech/multi-agent-backend
```

