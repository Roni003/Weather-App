import Home from './routes/Home';
import Locations from "./routes/Locations.jsx";
import ErrorPage from './routes/ErrorPage.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/locations",
    element: <Locations />,
    errorElement: <ErrorPage />
  }
]);

function App() {
  return (
    <div className='app'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App;