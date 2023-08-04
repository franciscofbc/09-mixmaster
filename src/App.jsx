import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  HomeLayout,
  About,
  Landing,
  Error,
  Newsletter,
  Cocktail,
  SingleErrorPage,
} from './pages';
import { loader as loaderLading } from './pages/Landing';
import { loader as loaderSingleCocktail } from './pages/Cocktail';
import { action as actionNewsletter } from './pages/Newsletter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: loaderLading,
        errorElement: <SingleErrorPage />,
        element: <Landing />,
      },
      {
        path: 'cocktail/:id',
        errorElement: <SingleErrorPage />,
        loader: loaderSingleCocktail,
        element: <Cocktail />,
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        action: actionNewsletter,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
