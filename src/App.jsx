import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppLayout from "./components/layouts/AppLayout.jsx"
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Movie from './pages/Movie.jsx';
import Service from './pages/Service.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorPage from './pages/ErrorPage.jsx';
import { getMoviesData } from './api/GetAPIData.jsx';
import MovieDetails from './components/UI/MovieDetails.jsx';
import { getMoviesDetails } from './api/GetMovieDetails.jsx';

const App = () => {

  const render = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/dynamic-routing-in-react",
          element: <Home />
        },
        {
          path: "/dynamic-routing-in-react/contact",
          element: <Contact />
        },
        {
          path: "/dynamic-routing-in-react/movie",
          element: <Movie />,
          loader: getMoviesData,
        },
        {
          path: "/dynamic-routing-in-react/movie/:movieID",
          element: <MovieDetails />,
          loader: getMoviesDetails,
        },
        {
          path: "/dynamic-routing-in-react/service",
          element: <Service />
        },
      ]
    }
  ]);

  return (
    <RouterProvider router={render} />
  )
}

export default App