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
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        loader: loaderLading(queryClient),
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
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>)
};

export default App;
