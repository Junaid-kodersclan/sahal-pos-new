import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { SearchFilterType } from "@/helper/types";
import { IoMdCloseCircle } from "react-icons/io";
import { appStyles } from "@/theme/appStyles";
import { useEffect, useState } from "react";
import FilterSidebar from "./FilterSidebar";
import { SIDEBAR } from "@/helper/constant";
import { BiSearch } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import _ from "lodash";

type PropsType = {
  title: string;
  searchVal: string;
  placeholder: string;
  handleSearch: Function;
};

export default function SearchBarWithTitle(props: PropsType) {
  const { title, searchVal, placeholder, handleSearch } = props;

  const [filterQty, setFilterQty] = useState<number>(0);
  const [showFilterSidebar, setShowFilterSidebar] = useState<boolean>(false);
  const [filter, setFilter] = useState<SearchFilterType>({
    stock: {},
    brand: {},
    category: [],
  });

  const handleShowFilterSidebar = () => {
    setShowFilterSidebar(true);
  };

  const handleRemoveFilter = () => {
    setFilter({ stock: {}, brand: {}, category: [] });
  };

  const handleUpdateFilterQty = (filter: any) => {
    let qty = 0;
    if (!_.isEmpty(filter.stock)) qty += 1;
    if (!_.isEmpty(filter.brand)) qty += 1;
    if (!_.isEmpty(filter.category)) qty += 1;
    setFilterQty(qty);
  };

  useEffect(() => {
    handleUpdateFilterQty(filter);
  }, [filter]);

  return (
    <>
      <div className="max-md:w-full flex flex-1 items-center justify-between max-sm:flex-col py-3 px-2 max-sm:py-2">
        <h2 className={appStyles.PAGE_TITLE}>{title}</h2>
        <div className="flex w-8/12 items-center max-sm:my-1 max-sm:w-full">
          <div className="flex w-full items-center bg-porcelain px-2 mx-2 rounded-xl max-sm:rounded-full text-txt overflow-hidden">
            <BiSearch className={`${appStyles.SEARCHBAR_ICON}`} />
            <input
              type="text"
              id="searchBar"
              name="searchBar"
              value={searchVal}
              placeholder={placeholder}
              onChange={(e) => handleSearch(e.target.value, filter)}
              className="w-full sm:h-12 max-sm:h-8 bg-porcelain outline-none px-3"
            />
            <RxCross2
              onClick={() => handleSearch("", filter)}
              className={`mr-1 transition-all duration-300 
              ${appStyles.SEARCHBAR_ICON}
              ${searchVal ? "opacity-100 cursor-pointer" : "opacity-0"}`}
            />
          </div>
          <div
            className={`shadow transition-all duration-300 flex items-center mx-2 ${
              filterQty > 0
                ? "bg-primaryLight rounded-3xl pl-2"
                : "hover:bg-porcelain bg-light rounded"
            }`}
          >
            <button
              onClick={handleShowFilterSidebar}
              className="p-2 max-md:p-1"
            >
              <HiAdjustmentsHorizontal size={24} />
            </button>
            {filterQty > 0 && (
              <button
                onClick={handleRemoveFilter}
                className="bg-primary flex items-center ml-2 rounded-xl mx-2 max-md:mx-1"
              >
                <span className="text-pure text-sm font-semibold px-2 ml-0.5">
                  {filterQty}
                </span>
                <IoMdCloseCircle className="text-pure text-2xl" />
              </button>
            )}
          </div>
        </div>
      </div>
      <FilterSidebar
        filter={filter}
        setFilter={setFilter}
        showFilterSidebar={showFilterSidebar}
        setShowFilterSidebar={setShowFilterSidebar}
      />
    </>
  );
}
