import { Route, createRoutesFromElements, createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Inicio from './components/Inicio/Inicio';
import Meals from './components/Meals/Meals';
import Contactos from './components/Contactos/Contactos';

const routesFromElements = createRoutesFromElements(
  <Route element={<Layout />}>
    <Route index element={<Inicio />} />
    <Route path='/' element={<Inicio />} />
    <Route path='/menu' element={<Meals />} errorElement={<ErrorBoundary />} />
    <Route path="/contacto" element={<Contactos />} errorElement={<ErrorBoundary />} />
  </Route>
);

const router = createBrowserRouter(routesFromElements);

export const App = () => {
  return <RouterProvider router={router} />;
};