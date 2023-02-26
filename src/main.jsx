import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import "./index.css";
import App from "./App";
import Root from "./routes/root";
import Inicio from "./components/Inicio/inicio";
import Contactos from "./components/Contactos/Contactos";

// const router = createBrowserRouter([
//   { path: "/", element: <Root />, },
//   { path: "/inicio", element: <Inicio />, },
//   { path: "/contactos", element: <Contactos />, },
//   // { path: "/contacto", element: <Inicio />, },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
