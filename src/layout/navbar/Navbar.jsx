import { useState } from "react";
import Logo from "@/ui/Logo";
import ToggleSidebar from "./ToggleSidebar";
import SmallScreenLinks from "./SmallScreenLinks";
import BigScreenLinks from "./BigScreenLinks";

export default function Navbar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => setShowSidebar((prev) => !prev);
  const closeSidebar = () => setShowSidebar(false);

  return (
    <>
      <div className="h-[80px] bg-primary/70">
        <div className="flexBetween container h-full gap-4">
          <Logo />

          <BigScreenLinks />

          <ToggleSidebar toggleSidebar={toggleSidebar} />
        </div>
      </div>
      {/* LINKS IN SMALL SCREENS */}
      <SmallScreenLinks showSidebar={showSidebar} closeSidebar={closeSidebar} />
    </>
  );
}
