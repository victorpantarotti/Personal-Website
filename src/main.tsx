import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyle from './components/GlobalStyle/index.tsx';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
);
