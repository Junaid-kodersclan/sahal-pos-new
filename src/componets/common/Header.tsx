"use client";

import { useWindowWidth } from "@/helper/hooks";
import { RxDotFilled } from "react-icons/rx";
import { HEADER_DATA } from "@/helper/data";
import { FaBell } from "react-icons/fa";
import { routes } from "@/helper/routes";
import Image from "next/image";
import Link from "next/link";

let breakpoint = 768;

type PropsType = {};

export default function Header(props: PropsType) {
  const {} = props;

  const windowWidth = useWindowWidth();

  return (
    <>
      <header className="flex justify-between items-center bg-pure border-b border-iron border-opacity-60 px-4 py-2 sticky top-0 z-10 max-sm:py-1 max-sm:px-2">
        <Link
          href={routes.sell}
          className="w-12 h-12 rounded-full bg-light border-2 border-primary flex items-center justify-center max-sm:w-8 max-sm:h-8"
        >
          <Image
            alt="logo"
            width={100}
            height={100}
            src={HEADER_DATA.logo}
            className="rounded-full"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href={routes.notification}
            className="relative w-10 h-10 rounded-full bg-porcelain flex items-center justify-center max-sm:w-6 max-sm:h-6 text-sm"
          >
            <FaBell className="max-sm:text-sm text-xl" />
            <span className="flex items-center justify-center w-4 h-4 text-xs absolute -right-1 -top-1 bg-primary text-pure rounded-full">
              12
            </span>
          </Link>
          <Link
            href={routes.profile}
            className="w-12 h-12 rounded-full border-2 border-primary relative flex items-center justify-center max-sm:w-8 max-sm:h-8"
          >
            <Image
              width={100}
              height={100}
              alt="author image"
              className="rounded-full"
              src={HEADER_DATA.authorImg}
            />
            <RxDotFilled className="absolute -right-3 -bottom-3 text-4xl max-sm:text-3xl text-secondary" />
          </Link>
          {windowWidth > breakpoint && (
            <div className="flex flex-col justify-start">
              <h3 className="font-bold text-sm">{HEADER_DATA.author}</h3>
              <p className="text-xs text-dull font-light">
                {HEADER_DATA.designer}
              </p>
            </div>
          )}
        </div>
      </header>
      {/* <StoreExist /> */}
    </>
  );
}
