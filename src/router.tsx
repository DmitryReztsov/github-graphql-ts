import { createBrowserRouter } from 'react-router-dom';

import RootLayout from './layouts/RootLayout/RootLayout.tsx';

import Repos from './pages/Repos/Repos.tsx';
import Repo from './pages/Repo/Repo.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Repos />,
      },
      {
        path: ':owner/:name',
        element: <Repo />,
      },
    ],
  },
]);

export default router;
