import { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Popular from "./components/Popular/Popular";
import TopRated from "./components/TopRated/TopRated";
import UpComing from "./components/UpComing/UpComing";
function App() {
  const getPopular = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    const data = await response.json();
    return data;
  };
  const getToprated = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    const data = await response.json();
    return data;
  };
  const getUpcoming = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=17f1ceadcf3767a35e55dd6204800668"
    );
    const data = await response.json();
    return data;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/popular",
      element: <Popular />,
      loader: getPopular,
    },
    {
      path: "/toprated",
      element: <TopRated />,
      loader: getToprated,
    },
    {
      path: "/upcoming",
      element: <UpComing />,
      loader: getUpcoming,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
