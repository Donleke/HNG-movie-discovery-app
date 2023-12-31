import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Detail from "../pages/Detail";
import LayOut from "../components/LayOut";
import Home from "../pages/Home";

export default function Routespath() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<LayOut />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="/movies/:id" element={<Detail />} />
        {/* <Route path="movies/genres/:id" element={<Genres />} /> */}
        {/* <Route path="movies/popular" element={<Popular />} />
        <Route path="movies/top_rated/" element={<Toprated />} />
        <Route path="person/popular/" element={<Person />} />
        <Route path="movie/:movie_id" element={<MovieId />} />
        <Route path="person/:person_id" element={<PersonId />} /> */}
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
