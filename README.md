# React 19 Feature Demos

A comprehensive demonstration of new React 19 features built with Next.js 16, showcasing modern patterns for async data handling and improved UX.

## 🚀 Features Demonstrated

### 1. **Suspense + use() Hook Demo** (`/suspense`)
Learn how React 19's `<Suspense />` component and the new `use()` hook work together for elegant async data fetching:
- Server-side data fetching from PostgreSQL database
- Automatic loading states with fallback UI (skeleton screens)
- Smooth transitions when data loads
- Built with Server Actions for database operations

### 2. **Activity Component Demo** (`/activity`)
Explore the new `<Activity />` component that revolutionizes how React handles loading and transition states:
- **With `<Activity />`**: Preserves component state and input focus during tab switches - no unmounting/remounting
- **Without `<Activity />`**: Traditional conditional rendering that loses state on navigation
- Side-by-side comparison to see the UX improvements

## 🛠️ Tech Stack

- **React 19.2** - Latest React with new concurrent features
- **Next.js 16.0.3** - App Router with Server Components
- **TypeScript** - Full type safety
- **Tailwind CSS v4** - Modern utility-first styling
- **PostgreSQL** - Database with Neon serverless
- **Drizzle ORM** - Type-safe database queries
- **shadcn/ui** - Beautiful, accessible UI components

## 📦 Project Structure

```
react19.2/
├── app/
│   ├── page.tsx              # Home page with feature links
│   ├── suspense/page.tsx     # Suspense + use() demo
│   └── activity/page.tsx     # Activity component demo
├── components/
│   ├── data-content.tsx      # Data fetching component with use()
│   ├── tabs/
│   │   ├── tab-activity.tsx      # Demo with <Activity />
│   │   └── tab-no-activity.tsx   # Demo without <Activity />
│   └── ui/                   # shadcn/ui components
├── actions/
│   └── posts.ts              # Server Actions for database operations
├── db/
│   ├── index.ts              # Database connection
│   └── schema.ts             # Drizzle schema definitions
└── drizzle.config.ts         # Drizzle ORM configuration
```

## 🏁 Getting Started

### Prerequisites

- Node.js 20+ installed
- PostgreSQL database (or Neon account for serverless PostgreSQL)
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react19.2
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   ```

4. **Set up the database**
   ```bash
   # Generate migrations
   npx drizzle-kit generate

   # Run migrations
   npx drizzle-kit migrate
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🎯 What to Try

1. **Suspense Demo** (`/suspense`):
   - Watch the skeleton loading states
   - See how data streams in from the database
   - Observe smooth transitions with Suspense boundaries

2. **Activity Demo** (`/activity`):
   - Type in the search input on the first tab
   - Switch between tabs
   - Compare how the WITH `<Activity />` version preserves your input focus
   - Notice how the WITHOUT version loses focus and resets the component

## 📚 Database Schema

The demo uses a simple `posts` table:

```typescript
posts {
  id: integer (primary key, auto-increment)
  title: text (required)
  body: text (required)
  createdAt: timestamp (default: now())
}
```

## 🔑 Key Concepts

### React 19 Features

- **`use()` hook**: Unwraps Promises in components, enabling async data handling in Client Components
- **`<Suspense />`**: Declarative loading states for async operations
- **`<Activity />`**: Manages transition states and preserves component state during navigation
- **Server Actions**: Server-side functions callable from client components

### Next.js 16 Features

- **App Router**: File-system based routing with layouts
- **Server Components**: Components that run on the server by default
- **Streaming**: Progressive rendering with Suspense

## 🚢 Deployment

### Deploy on Vercel

The easiest way to deploy this app:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add your `DATABASE_URL` environment variable
4. Deploy!

Vercel will automatically detect Next.js and configure the build settings.

For more details, check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying).

## 📖 Learn More

### React 19 Resources
- [React 19 Release Notes](https://react.dev/blog/2024/12/05/react-19)
- [React Documentation](https://react.dev)
- [use() Hook Documentation](https://react.dev/reference/react/use)

### Next.js Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

### Additional Tools
- [Drizzle ORM Documentation](https://orm.drizzle.team)
- [shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## 🤝 Contributing

This is a demonstration project. Feel free to fork and experiment with your own React 19 features!

## 📝 License

MIT License - feel free to use this project for learning and experimentation.
