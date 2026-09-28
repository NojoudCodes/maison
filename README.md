# Maison

A modern storefront web app built with React 19, Vite and Tailwind CSS. Maison features a home page for browsing and a checkout page, with client-side routing and lightweight global state management.

## Features

- Home page and checkout flow with client-side routing
- Shared navigation bar across all pages
- Global state management with Zustand
- Utility-first styling with Tailwind CSS v4
- Icon set from React Icons
- Fast development with Vite and Hot Module Replacement
- ESLint with React Hooks and React Refresh rules

## Tech Stack

| Category | Technology |
| --- | --- |
| UI library | [React 19](https://react.dev/) |
| Build tool | [Vite](https://vitejs.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Routing | [React Router](https://reactrouter.com/) |
| State management | [Zustand](https://zustand.docs.pmnd.rs/) |
| Icons | [React Icons](https://react-icons.github.io/react-icons/) |
| Linting | [ESLint](https://eslint.org/) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 20.19 or later
- npm

### Installation

```bash
git clone https://github.com/NojoudCodes/maison.git
cd maison
npm install
```

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server at `http://localhost:5173` |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint across the project |

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/checkout` | Checkout |

## Project Structure

```
maison/
├── src/
│   ├── components/
│   │   └── layouts/
│   │       └── Navbar.jsx    # Site-wide navigation
│   ├── pages/
│   │   ├── Home.jsx          # Landing / product browsing page
│   │   └── Checkout.jsx      # Checkout page
│   ├── App.jsx               # Route definitions
│   └── App.css
├── index.html                # HTML entry point
├── vite.config.js            # Vite + Tailwind configuration
├── eslint.config.js          # ESLint configuration
└── package.json
```

## Contributing

Contributions, issues and feature requests are welcome.

1. Fork the repository
2. Create your branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Author

**Nojoud**: [@NojoudCodes](https://github.com/NojoudCodes)
