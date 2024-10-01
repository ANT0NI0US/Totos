import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

export default function AppLayout() {
  return (
    <main className="flex min-h-screen flex-col justify-between">
      <Navbar />

      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}
