import { BrandAndCateoryButton } from "../addProduct/BrandAndCategoryButton";
import { PRODUCT_FILTER_STOCK_ITEM } from "@/helper/data";
import CategorySidebar from "../product/CategorySidebar";
import BrandSidebar from "../product/BrandSidebar";
import SidebarContainer from "./SidebarContainer";
import FilterStockItem from "./FilterStockItem";
import { SIDEBAR } from "@/helper/constant";
import { RxCross2 } from "react-icons/rx";
import _ from "lodash";
import {
  CategoryType,
  FilterStockType,
  SearchFilterType,
} from "@/helper/types";
import { useState } from "react";

type PropsType = {
  setFilter: Function;
  filter: SearchFilterType;
  showFilterSidebar: boolean;
  setShowFilterSidebar: Function;
};

export default function FilterSidebar(props: PropsType) {
  const { filter, setFilter, showFilterSidebar, setShowFilterSidebar } = props;

  // useState states
  const [showSidebar, setShowSidebar] = useState<string>("");

  // handle close sidebar
  const handleClose = () => {
    setShowFilterSidebar(false);
  };

  // handle set filter value
  const handleSetFilterValue = (key: string, value: any) => {
    let temp = _.cloneDeep(filter);
    setFilter({ ...temp, [key]: value });
  };

  // handle select stock for filter
  const handleSelectStock = (obj: FilterStockType) => {
    if (filter.stock.id === obj.id) {
      return setFilter({ ...filter, stock: {} });
    }

    handleSetFilterValue("stock", obj);
  };

  // handle select brand for filter
  const handleSelectBrand = (obj: CategoryType) => {
    if (filter.brand.id === obj.id) {
      return setFilter({ ...filter, brand: {} });
    }

    handleSetFilterValue("brand", obj);
  };

  // handle select catgory for filter
  const handleSelectCategory = (obj: CategoryType) => {
    let findIndex = _.findIndex(filter.category, ["id", obj.id]);
    const temp = _.cloneDeep(filter.category);

    if (findIndex >= 0) {
      temp.splice(findIndex, 1);
      return handleSetFilterValue("category", temp);
    }

    temp.push(obj);
    handleSetFilterValue("category", temp);
  };

  return (
    <SidebarContainer handleClose={handleClose} isVisible={showFilterSidebar}>
      <>
        {!showSidebar && (
          <>
            <div className="bg-pure flex items-center justify-between max-sm:p-2 p-4">
              <h2>Filter</h2>
              <button onClick={handleClose}>
                <RxCross2 className="text-2xl max-sm:text-xl" />
              </button>
            </div>
            <div className="border-y border-iron border-opacity-60 p-4">
              <h4 className="font-semibold text-sm text-riverBed">Stock</h4>
              <ul className="my-8 space-y-3">
                {PRODUCT_FILTER_STOCK_ITEM.map((item) => {
                  let isActive = filter.stock == item;
                  return (
                    <FilterStockItem
                      data={item}
                      key={item.id}
                      isActive={isActive}
                      handleClick={handleSelectStock}
                    />
                  );
                })}
              </ul>
            </div>
            <div className="px-4 mt-8 space-y-6">
              <BrandAndCateoryButton
                label="Brand"
                value={filter.brand}
                handleOnClick={() => setShowSidebar(SIDEBAR.BRAND)}
              />
              <BrandAndCateoryButton
                label="Categories"
                value={filter?.category}
                handleOnClick={() => setShowSidebar(SIDEBAR.CATEGORY)}
              />
            </div>
            <button
              className="absolute right-5 bottom-5 px-5 py-3 max-sm:py-1 max-sm:px-2 bg-primary hover:bg-ecstasy text-pure font-semibold rounded-md"
              onClick={handleClose}
            >
              Filter
            </button>
          </>
        )}
        {/*  BRAND_SIDEBAR  */}
        {showSidebar == SIDEBAR.BRAND && (
          <BrandSidebar
            isForSelect
            key={`__BRAND_SIDEBAR__`}
            showSidebar={showSidebar}
            selectedBrand={filter.brand}
            setShowSidebar={setShowSidebar}
            handleSelectBrand={handleSelectBrand}
            handleGoBack={() => setShowSidebar("")}
          />
        )}
        {/*  CATEGORY_SIDEBAR  */}
        {showSidebar == SIDEBAR.CATEGORY && (
          <CategorySidebar
            isForMultipleSelect
            key={`CATEGORY_SIDEBAR`}
            showSidebar={showSidebar}
            setShowSidebar={setShowSidebar}
            selectedCategories={filter.category}
            handleSelectCategory={handleSelectCategory}
            handleGoBack={() => setShowSidebar("")}
          />
        )}
      </>
    </SidebarContainer>
  );
}
