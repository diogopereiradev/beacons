import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import { Home } from './routes/Home';
import { Editor } from './routes/Editor';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/editor',
    element: <Editor />
  }
], {
  basename: '/'
});