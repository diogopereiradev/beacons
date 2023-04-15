import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import './shared/core/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Home } from './pages/Home';

function App(): JSX.Element {
  return(
    <main className='relative max-w-[2120px] mx-auto'>
      <Home />
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);