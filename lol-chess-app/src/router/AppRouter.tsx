import { createHashRouter, RouterProvider } from 'react-router-dom';
import BuilderPage from '../pages/BuilderPage/BuilderPage.tsx';
import BuildsPage from '../pages/BuildsPage/BuildsPage.tsx';

const router = createHashRouter([
  {
    element: <BuilderPage />,
    path: '/',
  },
  {
    element: <BuildsPage />,
    path: '/builds',
  },
  {
    element: <BuilderPage />,
    path: '/builder/:buildId',
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={router} />;
};
