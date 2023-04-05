import './shared/core/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

function App(): JSX.Element {
  return(
    <main className='relative max-w-[2120px] mx-auto'>
      
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);