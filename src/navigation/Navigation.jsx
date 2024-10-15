import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Spinner from "@/ui/spinner/Spinner.jsx";

const AppLayout = lazy(() => import("@/layout/AppLayout"));
const Home = lazy(() => import("@/features/home/Home.jsx"));
const Movies = lazy(() => import("@/features/Movies"));
const Tv = lazy(() => import("@/features/Tv"));
const Trending = lazy(() => import("@/features/Trending.jsx"));
const TopRated = lazy(() => import("@/features/TopRated"));
const Popular = lazy(() => import("@/features/Popular"));
const ComingSoon = lazy(() => import("@/features/ComingSoon"));
const MovieDetails = lazy(
  () => import("@/features/movieDetails/MovieDetails.jsx"),
);
const SearchResult = lazy(() => import("@/features/SearchResult"));

export default function Navigation() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path=":movieType/:movieId" element={<MovieDetails />} />
          <Route path="trending/:category" element={<Trending />} />
          <Route path="topRated/:category" element={<TopRated />} />
          <Route path="popular/:category" element={<Popular />} />
          <Route path="comingSoon" element={<ComingSoon />} />
          <Route
            path="search/:movieType/:searchTitle"
            element={<SearchResult />}
          />
        </Route>
      </Routes>
    </Suspense>
  );
}
