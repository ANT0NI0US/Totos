import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { links } from "./links";

import { useOutsideClick } from "@/hooks/useOutsideClick";
import Search from "./Search";

export default function SmallScreenLinks({ showSidebar, closeSidebar }) {
  const ref = useOutsideClick(() => closeSidebar());

  return (
    showSidebar && (
      <div className="md:hidden">
        {/* OVERLAY */}
        <div className="fixed inset-0 z-[9999] h-full w-full bg-black/40"></div>

        {/* SIDEBAR */}
        <nav
          ref={ref}
          className="fixed bottom-0 right-0 z-[10000] h-full w-[180px] bg-primary py-16 text-primary shadow-md drop-shadow-xl xs:w-[300px]"
        >
          {/* CLOSE SIDEBAR BUTTON*/}
          <div className="absolute right-2 top-3 w-[35px]">
            <button
              aria-label="Close-icon"
              onClick={closeSidebar}
              className="h-[35px] w-[35px] rounded-full border-[0.5px] border-light bg-red-700"
            >
              <div className="flexCenter">
                <IoCloseSharp className="text-light" size={20} />
              </div>
            </button>
          </div>

          <Search Styles="!flex-col !mb-5 !px-2" inputStyles="w-full" />

          {/* LINKS */}
          <div className="flex w-full flex-col">
            {links?.map((item, index) => (
              <div
                onClick={() => closeSidebar()}
                key={item.text}
                className={`${
                  index === 0 ? "border-t-2" : ""
                } flexCenter h-full w-full border-b-2 border-secondary text-lg font-semibold transition-all hover:border-secondary/50 hover:bg-secondary/40 hover:font-extrabold`}
              >
                <NavLink
                  className={(navClass) =>
                    navClass.isActive
                      ? "flexCenter h-full w-full border-r-8 border-orange bg-secondary/50 px-7 py-3 text-xl font-extrabold text-orange"
                      : "flexCenter h-full w-full px-7 py-3 text-light"
                  }
                  to={item.path}
                >
                  {item.text}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
      </div>
    )
  );
}
