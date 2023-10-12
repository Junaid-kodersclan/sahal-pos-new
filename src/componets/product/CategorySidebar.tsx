import SidebarContainer from "../common/SidebarContainer";
import CreateItemSidebar from "./CreateItemSidebar";
import DeleteModal from "../modals/DeleteModal";
import { CategoryType } from "@/helper/types";
import { SIDEBAR } from "@/helper/constant";
import CategoryList from "./CategoryList";
import { useDispatch } from "react-redux";
import Button from "../common/Button";
import { useState } from "react";
import {
  addCategoryAction,
  deleteCategoryAction,
  updateCategoryAction,
} from "@/store/categorySlice";
import _ from "lodash";

type PropsType = {
  showSidebar: string;
  handleGoBack?: Function;
  setShowSidebar: Function;
  isForMultipleSelect?: boolean;
  handleSelectCategory?: Function;
  selectedCategories?: CategoryType[];
};

export default function CategorySidebar(props: PropsType) {
  const {
    showSidebar,
    handleGoBack,
    setShowSidebar,
    selectedCategories,
    isForMultipleSelect,
    handleSelectCategory,
  } = props;

  // hooks variables
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState<CategoryType | any>({});

  // handle add new Category
  const handleAddCategory = (value: string) => {
    const payload = {
      userId: 1,
      storeId: 1,
      title: value,
      id: Number(new Date()),
    };
    dispatch(addCategoryAction(payload));
  };

  // handle update Category
  const handleUpdateCategory = (value: string) => {
    const payload = { ...activeCategory, title: value };
    dispatch(updateCategoryAction(payload));
  };

  // handle check is itme for add or update
  const handleCheckIsCategoryForAddOrUpdate = (value: string) => {
    if (!_.isEmpty(activeCategory) && activeCategory.id) {
      handleUpdateCategory(value);
    }

    if (_.isEmpty(activeCategory)) {
      handleAddCategory(value);
    }

    setShowSidebar(SIDEBAR.CATEGORY);
    setActiveCategory({});
  };

  // handle close sidebar
  const handleCloseSidebar = () => {
    setShowSidebar("");
    setActiveCategory({});
  };

  // handle go back and unselect category
  const handleGoBackToCategoryList = () => {
    setShowSidebar(SIDEBAR.CATEGORY);
    setActiveCategory({});
  };

  // handle select category for Update,and show Create category sidebar for update
  const handleSelectCategoryForUpdate = (obj: CategoryType) => {
    setActiveCategory(obj);
    setShowSidebar(SIDEBAR.CREATE_CATEGORY);
  };

  // handle show delete modal and select category for delete
  const handleSelectCategoryForDelete = (obj: CategoryType) => {
    setActiveCategory(obj);
    setIsModal(true);
  };

  // handle close delete modal
  const handleCloseDeleteModal = () => {
    setActiveCategory({});
    setIsModal(false);
  };

  // handle delete category
  const handleDeleteCategory = () => {
    dispatch(deleteCategoryAction(activeCategory.id));
    handleCloseDeleteModal();
  };

  return (
    <>
      {showSidebar == SIDEBAR.CATEGORY && (
        <CategoryList
          key={`_CategoryList_`}
          handleGoBack={handleGoBack}
          setShowSidebar={setShowSidebar}
          selectedCategories={selectedCategories}
          isForMultipleSelect={isForMultipleSelect}
          handleSelectCategory={handleSelectCategory}
          handleUpdateCategory={handleSelectCategoryForUpdate}
          handleDeleteCategory={handleSelectCategoryForDelete}
        />
      )}
      {showSidebar == SIDEBAR.CREATE_CATEGORY && (
        <CreateItemSidebar
          title={
            _.isEmpty(activeCategory) ? "Create Category" : "Update Category"
          }
          placeholder={
            _.isEmpty(activeCategory) ? "Create Category" : "Update Category"
          }
          selectedItem={activeCategory}
          handleClose={handleCloseSidebar}
          handleGoBack={handleGoBackToCategoryList}
          handleButtonClick={handleCheckIsCategoryForAddOrUpdate}
        />
      )}
      {isForMultipleSelect && (
        <div className="px-4 mt-auto w-full absolute bottom-0">
          <Button title="Done" onClick={() => setShowSidebar("")} />
        </div>
      )}
      <DeleteModal
        isLoading={false}
        isVisible={isModal}
        title="Confirmation"
        leftBtnTitle="Cancel"
        rightBtnTitle="Delete"
        key="Delete_Modal_For_Category"
        rightBtnFunction={handleDeleteCategory}
        leftBtnFunction={handleCloseDeleteModal}
        message="Do you really want to delete? this process cannot be undone"
      />
    </>
  );
}
