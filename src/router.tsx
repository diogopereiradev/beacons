import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Navbar } from './shared/components/layout/Navbar';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />
  }
], {
  basename: '/'
});