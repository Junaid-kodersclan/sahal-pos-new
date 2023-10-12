"use client";

import { activePageAction } from "@/store/generalSlice";
import { usePathname } from "next/navigation";
import { NavLinkType } from "@/helper/types";
import { useDispatch } from "react-redux";
import Link from "next/link";

type PropsType = {
  data: NavLinkType;
};

export default function NavLink(props: PropsType) {
  const { data } = props;
  const { title, icon, link, id } = data;

  // hooks and variables
  const dispatch = useDispatch();
  const pathname = usePathname();

  return (
    <Link
      href={link}
      onClick={() => dispatch(activePageAction(id))}
      className={`lg:p-4 lg:pl-8 max-lg:justify-center max-lg:w-8 max-lg:h-8 max-lg:rounded-full transition-all duration-500 hover:text-pure hover:bg-primary max-lg:hover:text-primary max-lg:hover:bg-pure flex items-center justify-start font-bold text-lg max-lg:text-xl
      ${
        link == pathname
          ? "bg-primary text-pure max-lg:bg-pure max-lg:text-primary"
          : "text-txt bg-pure max-lg:text-pure max-lg:bg-primary"
      }
      `}
    >
      <span>{icon}</span>
      <h6 className="pl-2 max-lg:hidden">{title}</h6>
    </Link>
  );
}
