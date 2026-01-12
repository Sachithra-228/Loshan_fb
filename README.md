# Facebook Home UI

A Facebook-like home page UI built with React, TypeScript, Vite, and TailwindCSS.

## Features

- **Top Navigation Bar**: Logo, search bar, navigation icons, and profile menu
- **Left Sidebar**: User profile, menu items, and shortcuts
- **Main Feed**: Post composer, stories row, and feed posts
- **Right Sidebar**: Sponsored content, friend requests, and birthdays

## Tech Stack

- React 18
- TypeScript
- Vite
- TailwindCSS
- Lucide React (icons)

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/
│   ├── Feed/
│   │   ├── Composer.tsx
│   │   ├── StoriesRow.tsx
│   │   ├── PostCard.tsx
│   │   └── index.tsx
│   ├── Navbar.tsx
│   ├── LeftSidebar.tsx
│   ├── RightSidebar.tsx
│   └── Layout.tsx
├── data/
│   └── mockData.ts
├── types/
│   └── index.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Responsive Design

- **Desktop (> 1100px)**: Full 3-column layout
- **Tablet (900px - 1100px)**: Right sidebar collapses
- **Mobile (< 900px)**: Left sidebar collapses to icons or drawer

## Notes

- All data is mock data (no backend required)
- Uses placeholder images from Picsum Photos
- Icons from Lucide React
- Fully accessible with semantic HTML and ARIA labels
