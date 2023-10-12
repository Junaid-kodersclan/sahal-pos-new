import {
  FaBell,
  FaCube,
  FaUsers,
  FaUserCircle,
  FaShoppingCart,
} from "react-icons/fa";
import NavLink from "./NavLink";
import { routes } from "@/helper/routes";
import { HiHome } from "react-icons/hi";
import { RiDashboardFill } from "react-icons/ri";
import { IoSettingsSharp } from "react-icons/io5";

type PropsType = {};

export const NAV_LINKS = [
  {
    id: 1,
    link: routes.sell,
    title: "Sell",
    icon: <HiHome />,
  },
  {
    id: 2,
    link: routes.dashboard,
    title: "Dashboard",
    icon: <RiDashboardFill />,
  },
  {
    id: 3,
    link: routes.transaction,
    title: "Transaction",
    icon: <FaShoppingCart />,
  },
  {
    id: 4,
    link: routes.product,
    title: "Product",
    icon: <FaCube />,
  },
  {
    id: 5,
    link: routes.store,
    title: "Store",
    icon: <IoSettingsSharp />,
  },
  {
    id: 6,
    link: routes.notification,
    title: "Notifications",
    icon: <FaBell />,
  },
  {
    id: 7,
    link: routes.customer,
    title: "Customers",
    icon: <FaUsers />,
  },
  {
    id: 8,
    link: routes.profile,
    title: "Profile",
    icon: <FaUserCircle />,
  },
];

export default function NavSidebar(props: PropsType) {
  const {} = props;

  return (
    <aside className="lg:w-80 max-lg:w-fit max-lg:bg-primary border-r border-iron border-opacity-60 max-lg:space-y-3 max-lg:p-1 flex flex-col z-10">
      {NAV_LINKS.map((item) => {
        return (
          <NavLink data={item} key={`NAV_LINKS_${item.title}${item.id}`} />
        );
      })}
    </aside>
  );
}
