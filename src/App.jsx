import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import AddCharacterPage from './assets/pages/AddCharacterPage';
import Update from './assets/pages/Update';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <AddCharacterPage />,
  },
  {
    path: "/update/:id",
    element: <Update />,
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;

