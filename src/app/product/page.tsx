"use client";

import SearchBarWithTitle from "@/componets/common/SearchBarWithTitle";
import SidebarContainer from "@/componets/common/SidebarContainer";
import CategorySidebar from "@/componets/product/CategorySidebar";
import ProductButton from "@/componets/product/ProductButton";
import BrandSidebar from "@/componets/product/BrandSidebar";
import ProductList from "@/componets/product/ProductList";
import { IoPricetagOutline } from "react-icons/io5";
import { SearchFilterType } from "@/helper/types";
import { SIDEBAR } from "@/helper/constant";
import { appStyles } from "@/theme/appStyles";
import { FaCubes } from "react-icons/fa";
import { routes } from "@/helper/routes";
import { useState } from "react";
import Link from "next/link";

export default function ProductPage() {
  const [searchVal, setSearchVal] = useState<string>("");
  const [showSidebar, setShowSidebar] = useState<string>("");

  const handleSearch = (value: string, filter: SearchFilterType) => {
    setSearchVal(value);
    console.log({ filter });
  };

  return (
    <>
      <div className="h-full w-full">
        {/* product page searchbar */}
        <div className="flex lg:items-center max-lg:flex-col">
          <SearchBarWithTitle
            title="Product"
            searchVal={searchVal}
            handleSearch={handleSearch}
            placeholder="Search product"
          />
          <div className="flex items-center max-lg:self-end px-4">
            <ProductButton
              title="Brand"
              icon={<FaCubes />}
              handleClick={() => setShowSidebar("BRAND")}
            />
            <ProductButton
              title="Categories"
              icon={<IoPricetagOutline />}
              handleClick={() => setShowSidebar(SIDEBAR.CATEGORY)}
            />
            <Link
              href={routes.addProduct}
              className={appStyles.SEARCHBAR_BUTTON}
            >
              Add Product
            </Link>
          </div>
        </div>
        {/* product list */}
        <ProductList />
      </div>
      <SidebarContainer
        handleClose={() => setShowSidebar("")}
        isVisible={
          showSidebar == SIDEBAR.BRAND ||
          showSidebar == SIDEBAR.CATEGORY ||
          showSidebar == SIDEBAR.CREATE_BRAND ||
          showSidebar == SIDEBAR.CREATE_CATEGORY
        }
      >
        <>
          {/*  BRAND_SIDEBAR  */}
          <BrandSidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />

          {/*  CATEGORY_SIDEBAR  */}
          <CategorySidebar
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
          />
        </>
      </SidebarContainer>
    </>
  );
}
