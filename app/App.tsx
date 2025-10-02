import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './routes/home';
import demoRoutes from './routes';
import './app.css';

export function App() {
  // Use Vite's BASE_URL as router basename so the app works when
  // served from a subpath (e.g., GitHub Pages project site).
  const rawBase = import.meta.env.BASE_URL ?? '/';
  const basename = rawBase !== '/' && rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route index element={<Home />} />
        {demoRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
