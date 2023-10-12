import {
  addBrandAction,
  deleteBrandAction,
  updateBrandAction,
} from "@/store/brandSlice";
import SidebarContainer from "../common/SidebarContainer";
import CreateItemSidebar from "./CreateItemSidebar";
import DeleteModal from "../modals/DeleteModal";
import { CategoryType } from "@/helper/types";
import { SIDEBAR } from "@/helper/constant";
import { useDispatch } from "react-redux";
import Button from "../common/Button";
import BrandList from "./BrandList";
import { useState } from "react";
import _ from "lodash";

type PropsType = {
  showSidebar: string;
  isForSelect?: boolean;
  handleGoBack?: Function;
  setShowSidebar: Function;
  selectedBrand?: CategoryType;
  handleSelectBrand?: Function;
};

export default function BrandSidebar(props: PropsType) {
  const {
    isForSelect,
    showSidebar,
    handleGoBack,
    selectedBrand,
    setShowSidebar,
    handleSelectBrand,
  } = props;

  // hooks variables
  const dispatch = useDispatch();

  const [isModal, setIsModal] = useState(false);
  const [activeBrand, setActiveBrand] = useState<CategoryType | any>({});

  // handle add new brand
  const handleAddBrand = (value: string) => {
    const payload = {
      userId: 1,
      storeId: 1,
      title: value,
      id: Number(new Date()),
    };
    dispatch(addBrandAction(payload));
  };

  // handle update brand
  const handleUpdateBrand = (value: string) => {
    const payload = { ...activeBrand, title: value };
    dispatch(updateBrandAction(payload));
  };

  // handle check is brand for add or update
  const handleCheckIsbrandForAddOrUpdate = (value: string) => {
    if (!_.isEmpty(activeBrand) && activeBrand.id) {
      handleUpdateBrand(value);
    }

    if (_.isEmpty(activeBrand)) {
      handleAddBrand(value);
    }

    setShowSidebar(SIDEBAR.BRAND);
    setActiveBrand({});
  };

  // handle close sidebar
  const handleCloseSidebar = () => {
    setShowSidebar("");
    setActiveBrand({});
  };

  // handle go back and unselect brand
  const handleGoBackToBrandList = () => {
    setShowSidebar(SIDEBAR.BRAND);
    setActiveBrand({});
  };

  // handle Update brand
  const handleSelectBrandForUpdate = (obj: CategoryType) => {
    setActiveBrand(obj);
    setShowSidebar(SIDEBAR.CREATE_BRAND);
  };

  // handle select brand for delete,and show delete modal
  const handleDeleteBrand = (obj: CategoryType) => {
    setActiveBrand(obj);
    setIsModal(true);
  };

  // handle close delete modal
  const handleCloseDeleteModal = () => {
    setActiveBrand({});
    setIsModal(false);
  };

  // handle delete brand
  const handleSelectBrandForDelete = () => {
    dispatch(deleteBrandAction(activeBrand.id));
    handleCloseDeleteModal();
  };

  return (
    <>
      {showSidebar == SIDEBAR.BRAND && (
        <BrandList
          key={`_BrandList_`}
          isForSelect={isForSelect}
          handleGoBack={handleGoBack}
          selectedBrand={selectedBrand}
          setShowSidebar={setShowSidebar}
          handleSelectBrand={handleSelectBrand}
          handleDeleteBrand={handleDeleteBrand}
          handleUpdateBrand={handleSelectBrandForUpdate}
        />
      )}
      {showSidebar == SIDEBAR.CREATE_BRAND && (
        <CreateItemSidebar
          title={_.isEmpty(activeBrand) ? "Create Brand" : "Update Brand"}
          placeholder={_.isEmpty(activeBrand) ? "Create Brand" : "Update Brand"}
          selectedItem={activeBrand}
          handleClose={handleCloseSidebar}
          handleGoBack={handleGoBackToBrandList}
          handleButtonClick={handleCheckIsbrandForAddOrUpdate}
        />
      )}
      {isForSelect && (
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
        key="Delete_Modal_For_Brand"
        leftBtnFunction={handleCloseDeleteModal}
        rightBtnFunction={handleSelectBrandForDelete}
        message="Do you really want to delete? this process cannot be undone"
      />
    </>
  );
}
