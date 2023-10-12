"use client";

import SearchBarWithTitle from "@/componets/common/SearchBarWithTitle";
import SellCategoryList from "@/componets/sell/SellCategoryList";
import SellCartSidebar from "@/componets/sell/SellCartSidebar";
import SellProductList from "@/componets/sell/SellProductList";
import SellViewCart from "@/componets/sell/SellViewCart";
import { SearchFilterType } from "@/helper/types";
import { AnimatePresence } from "framer-motion";
import { useWindowWidth } from "@/helper/hooks";
import { useState } from "react";

const breakpoint = 768;

export default function SellPage() {
  // variables hooks
  const windowWidth = useWindowWidth();

  // useState states
  const [searchVal, setSearchVal] = useState<string>("");
  const [showCartSidebar, setShowCartSidebar] = useState<boolean>(false);

  const handleSearch = (value: string, filter: SearchFilterType) => {
    setSearchVal(value);
    console.log({ filter });
  };

  return (
    <div className="flex h-full">
      <div className="xl:w-8/12 max-xl:w-7/12 max-md:w-full h-full">
        <SearchBarWithTitle
          title="Sell"
          searchVal={searchVal}
          handleSearch={handleSearch}
          placeholder="Search product"
        />
        <SellCategoryList />
        <SellProductList />
      </div>
      <AnimatePresence>
        {(windowWidth > breakpoint || showCartSidebar) && (
          <SellCartSidebar handleClose={() => setShowCartSidebar(false)} />
        )}
      </AnimatePresence>
      {windowWidth < breakpoint && !showCartSidebar && (
        <SellViewCart handleClick={() => setShowCartSidebar(true)} />
      )}
    </div>
  );
}
