import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Spinner from "../ui/loader/Spinner.jsx";
import Trending from "../features/trending/Trending.jsx";
import Home from "../features/home/Home.jsx";
import MovieDetails from "../features/movieDetials/MovieDetails.jsx";
import AppLayout from "@/layout/AppLayout";
import SearchResult from "@/features/search/SearchResult";

export default function Navigations() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path=":movieType/:movieId" element={<MovieDetails />} />
          <Route path="trending" element={<Trending />} />
          <Route
            path="search/:movieType/:searchTitle"
            element={<SearchResult />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
