import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  title: string;
  icon: ReactNode;
};

function SidebarItem({ to, title, icon }: Props) {
  return (
    <NavLink to={to}>
      {({ isActive }) => {
        return (
          <div
            data-tip={title}
            className={`flex items-center gap-2 py-1 px-8 ${
              isActive ? "border-r-4 border-secondary" : ""
            }`}
          >
            <span
              className={`text-primary  text-xl ${
                isActive ? " opacity-100" : "opacity-40"
              }`}
            >
              {icon}
            </span>
            <p
              className={`text-primary font-semibold hidden md:block ${
                isActive ? " opacity-100" : "opacity-40 "
              }`}
            >
              {title}
            </p>
          </div>
        );
      }}
    </NavLink>
  );
}

export default SidebarItem;
