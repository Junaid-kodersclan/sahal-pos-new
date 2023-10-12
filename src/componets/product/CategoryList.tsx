import SidebarListItem from "./SidebarListItem";
import { CategoryType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import SidebarHeader from "./SidebarHeader";
import { SIDEBAR } from "@/helper/constant";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";

type PropsType = {
  handleGoBack?: Function;
  setShowSidebar: Function;
  isForMultipleSelect?: boolean;
  handleUpdateCategory: Function;
  handleDeleteCategory: Function;
  handleSelectCategory?: Function;
  selectedCategories?: CategoryType[];
};
type CategoryListType = {
  category: {
    categoryList: CategoryType[];
  };
};

export default function BrandAndCategoryList(props: PropsType) {
  const {
    handleGoBack,
    setShowSidebar,
    selectedCategories,
    isForMultipleSelect,
    handleSelectCategory,
    handleUpdateCategory,
    handleDeleteCategory,
  } = props;

  // redux store data
  const categoryList = useSelector(
    (state: CategoryListType) => state.category.categoryList
  );

  // handle search
  const handleSearch = (val: string) => {
    console.log({ val });
  };

  return (
    <>
      <div className="h-full overflow-auto pb-20">
        <SidebarHeader
          title="Categories"
          handleSearch={handleSearch}
          handleGoBack={handleGoBack}
          placeholder="Search category"
          isForSelect={isForMultipleSelect}
          handleClose={() => setShowSidebar("")}
          handleAdd={() => setShowSidebar(SIDEBAR.CREATE_CATEGORY)}
        />
        {/* list item */}
        {categoryList.map((item: CategoryType) => {
          let isActive = selectedCategories?.some(
            (selectedItem) => selectedItem?.id === item?.id
          );
          return (
            <SidebarListItem
              data={item}
              isActive={isActive}
              key={`categoryListItem_${item.id}`}
              handleDelete={handleDeleteCategory}
              handleUpdate={handleUpdateCategory}
              handleOnClick={handleSelectCategory}
              isForMultipleSelect={isForMultipleSelect}
            />
          );
        })}
        <Loader loading={false} style={appStyles.LOADER} />
      </div>
      <Loader
        loading={false}
        loaderSize={40}
        style={appStyles.PARENT_FULL_LOADER}
      />
    </>
  );
}
