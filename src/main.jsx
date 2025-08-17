import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import Routes from "./routes/Routes";
import { StrictMode } from "react";
import "./App.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
);
