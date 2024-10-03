import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Spinner from "@/ui/spinner/Spinner.jsx";

const AppLayout = lazy(() => import("@/layout/AppLayout"));
const Home = lazy(() => import("@/features/home/Home.jsx"));
const Trending = lazy(() => import("@/features/trending/Trending.jsx"));
const TopRated = lazy(() => import("@/features/topRated/TopRated"));
const MovieDetails = lazy(
  () => import("@/features/movieDetials/MovieDetails.jsx"),
);
const SearchResult = lazy(() => import("@/features/search/SearchResult"));

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
          <Route path="topRated" element={<TopRated />} />
          <Route
            path="search/:movieType/:searchTitle"
            element={<SearchResult />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
