import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import AddCharacterPage from './assets/pages/AddCharacterPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <AddCharacterPage />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;

