import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import {BrowserRouter, Route, Routes} from 'react-router';
import {Dashboard} from './pages/Dashboard/Dashboard.tsx';
import {Accounts} from './pages/Accounts/Accounts.tsx';

const Root = () => {
  return (
    <BrowserRouter basename='dashboard-dec'>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='dashboard' element={<Dashboard />} />

          <Route path='accounts' element={<Accounts />} />

          <Route path='*' element={<p>Not found page</p>} />
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
