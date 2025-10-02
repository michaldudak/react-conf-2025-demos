import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './routes/home';
import demoRoutes from './routes';
import './app.css';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        {demoRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
