import { GiHamburgerMenu } from "react-icons/gi";

export default function ToggleSidebar({ toggleSidebar }) {
  return (
    <div className="flexCenter md:hidden">
      <button aria-label="Toogle-menu" onClick={toggleSidebar}>
        <div className="rounded-full bg-secondary p-2">
          <GiHamburgerMenu />
        </div>
      </button>
    </div>
  );
}
