import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {BrowserRouter, Route, Routes} from 'react-router';
import {Dashboard} from './pages/Dashboard/Dashboard.tsx';
import {Accounts} from './pages/Accounts/Accounts.tsx';
import {NotFound} from './pages/NotFound/NotFound.tsx';

const Root = () => {
  return (
    <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASE}>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='dashboard' element={<Dashboard />} />

          <Route path='accounts' element={<Accounts />} />

          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
