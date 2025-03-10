# LTI-ATS Frontend

Next.js 14 frontend application for the LTI Applicant Tracking System.

## Getting Started

```bash

cd frontend

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production server
npm start
```

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- React Query
- Testing Library

## Project Structure

```plaintext
src/
├── app/                   # Next.js 13+ App Router
├── components/           # Shared components
├── hooks/               # Custom React hooks
├── services/            # API services
├── types/              # TypeScript types
└── utils/              # Utility functions
```

## Development Conventions

- Use TypeScript for all components and functions
- Follow feature-based organization under `app` directory
- Place reusable components in `components` directory
- Use TailwindCSS for styling
- Write tests for all components and utilities
* All pages live under src/app directory
* Each route has its own directory with a page.tsx file
* Layout components are placed in app/layout.tsx for root layout
* Global styles are in app/globals.css
* Reusable components go in components directory
* Each feature (jobs, candidates, etc.) has its own directory under app