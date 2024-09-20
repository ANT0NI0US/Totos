import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import PageNotFound from "./PageNotFound";
import Loader from "./loader/Loader.jsx";
import Test from "../features/Test.jsx";

export default function Navigations() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
}
