import { NavLink } from "react-router-dom";
import { links } from "./links";
import Search from "./Search";

export default function BigScreenLinks() {
  return (
    <div className="hidden h-full w-full flex-1 gap-4 md:flex md:items-center md:justify-between">
      <div className=" flexCenter h-full w-full flex-1">
        {links?.map((item, index) => (
          <div
            key={item.text}
            className={`${
              index === 0 ? "border-l-2" : ""
            } flexCenter h-full w-full border-r-2 border-secondary text-lg font-semibold transition-all hover:border-secondary/50 hover:bg-secondary/40 hover:font-extrabold`}
          >
            <NavLink
              className={(navClass) =>
                navClass.isActive
                  ? "flexCenter h-full w-full border-b-8 border-orange bg-secondary/50 px-7 py-3 text-xl font-extrabold text-orange"
                  : "flexCenter h-full w-full px-7 py-3 text-light"
              }
              to={item?.path}
            >
              {item?.text}
            </NavLink>
          </div>
        ))}
      </div>

      <Search />
    </div>
  );
}
