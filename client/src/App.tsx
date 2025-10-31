import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CheckoutPage from './pages/CheckoutPage';
import DetailsPage from './pages/DetailsPage';
import ResultPage from './pages/ResultPage';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />, // Homepage shown separately (no Navbar)
  },
  {
    element: <Layout />, // Layout (Navbar) wraps these routes
    children: [
      {
        path: "/checkout/:id",
        element: <CheckoutPage />,
      },
      {
        path: "/details/:id",
        element: <DetailsPage />,
      },      
      {
        path: "/results",
        element: <ResultPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
