import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home } from './routes/Home';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
], {
  basename: '/'
});