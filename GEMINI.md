# Project: YAAM (Vite React Shadcn TS)

## Project Overview

This project is a React-based web application named "YAAM" (Assistant Virtuel Orange), built with TypeScript, Vite, and Tailwind CSS. It leverages `shadcn/ui` for its component library, which is built on Radix UI, providing a modern and accessible user interface.

The application features:
*   **Client-side Routing:** Managed with `react-router-dom`.
*   **State Management & Data Fetching:** Utilizes `@tanstack/react-query` for efficient data handling.
*   **Animations:** Powered by `framer-motion` for smooth UI transitions.
*   **Theming:** Implemented using `next-themes` for dynamic theme switching.
*   **Structure:** Organized as a single-page application with a persistent sidebar for navigation, facilitating access to different sections such as Home, Services, and FAQ.

The project structure is modular, with reusable components located in `src/components` and `src/components/ui` specifically for shadcn/ui elements.

## Building and Running

This project uses `bun` as its package manager. Ensure `bun` is installed before proceeding.

To install dependencies:
```bash
bun install
```

Available scripts:

*   **Development Server:** Starts the development server with hot-reloading.
    ```bash
    bun dev
    ```
*   **Build for Production:** Compiles the application for production deployment.
    ```bash
    bun build
    ```
*   **Build for Development:** Compiles the application for development environment.
    ```bash
    bun build:dev
    ```
*   **Preview Production Build:** Serves the production build locally for testing.
    ```bash
    bun preview
    ```
*   **Linting:** Runs ESLint to check for code style and errors.
    ```bash
    bun lint
    ```

## Development Conventions

*   **Language:** TypeScript is used throughout the project for enhanced type safety and developer experience.
*   **Styling:** Tailwind CSS is employed for a utility-first approach to styling. Custom themes and gradients are defined in `tailwind.config.ts`. The `cn` utility function (found in `src/lib/utils.ts`) is used for conditionally applying and merging Tailwind classes, ensuring clean and maintainable styles.
*   **Component Architecture:** The project follows a component-driven architecture. Common UI elements and application-specific components are located in `src/components`, while `shadcn/ui` components are organized under `src/components/ui`.
*   **Routing:** `react-router-dom` is used for declarative client-side routing, defining application navigation flows.
*   **Linting:** ESLint is configured with specific rules for TypeScript and React (see `eslint.config.js`) to maintain code quality, consistency, and identify potential issues early in the development cycle.
*   **Path Aliases:** The `vite.config.ts` file configures a path alias `@` that resolves to the `src/` directory, simplifying imports.
