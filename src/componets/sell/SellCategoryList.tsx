import { ALL_CATEGORIES } from "@/helper/constant";
import SellCategoryItem from "./SellCategoryItem";
import { CategoryType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";
import { useState } from "react";

type PropsType = {};
type CategoryListType = { category: { categoryList: CategoryType[] } };

export default function SellCategoryList(props: PropsType) {
  const {} = props;

  // useState states
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryType>(ALL_CATEGORIES);

  // redux store data
  const categoryList = useSelector(
    (state: CategoryListType) => state.category.categoryList
  );

  //  functions
  const handleSelectCategory = (obj: CategoryType) => {
    setSelectedCategory(obj);
    console.log({ obj });
  };

  return (
    <div className="relative">
      <div className="flex items-center w-full overflow-x-auto py-2">
        {[ALL_CATEGORIES, ...categoryList]?.map((item: CategoryType) => {
          let isActive = item.id == selectedCategory?.id;
          return (
            <SellCategoryItem
              data={item}
              isActive={isActive}
              key={`Category_Item_${item.id}`}
              handleSelectCategory={handleSelectCategory}
            />
          );
        })}
        <Loader loading={false} style={""} />
      </div>
      <Loader loading={false} style={appStyles.PARENT_FULL_LOADER} />
    </div>
  );
}
