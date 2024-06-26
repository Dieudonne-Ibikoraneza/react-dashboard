/* eslint-disable react/prop-types */
import { FcBarChart } from "react-icons/fc";
import {
  DASHBOARD_SIDEBAR_BOTTOM_LINKS,
  DASHBOARD_SIDEBAR_LINKS,
} from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import { HiOutlineLogout } from "react-icons/hi";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base";

const Sidebar = () => {
  return (
    <div className="bg-neutral-900 p-3 w-60 text-white flex flex-col">
      <div className="flex items-center gap-2 px-1 py-3">
        <FcBarChart fontSize={24} />
        <span className="text-neutral-100 text-lg">Dashboard</span>
      </div>
      <div className="flex-1 py-8 flex flex-col gap-0.5">
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
      <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
        {DASHBOARD_SIDEBAR_BOTTOM_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
        <div className={classNames("text-red-400 cursor-pointer", linkClass)}>
          <span className="text-xl">
            <HiOutlineLogout />
          </span>
          Logout
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      className={classNames(
        pathname === item.path
          ? "text-white bg-neutral-700"
          : "text-neutral-400",
        linkClass
      )}
      to={item.path}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}
