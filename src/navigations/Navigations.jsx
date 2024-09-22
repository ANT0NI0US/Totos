import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Spinner from "../ui/loader/Spinner.jsx";
import Trending from "../features/trending/Trending.jsx";
import Home from "../features/home/Home.jsx";

export default function Navigations() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="trending" element={<Trending />} />
      </Routes>
    </Suspense>
  );
}
