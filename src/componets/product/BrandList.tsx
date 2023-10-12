import SidebarListItem from "./SidebarListItem";
import { CategoryType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import SidebarHeader from "./SidebarHeader";
import { SIDEBAR } from "@/helper/constant";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";

type PropsType = {
  isForSelect?: boolean;
  handleGoBack?: Function;
  setShowSidebar: Function;
  handleUpdateBrand: Function;
  handleDeleteBrand: Function;
  selectedBrand?: CategoryType;
  handleSelectBrand?: Function;
};
type BrandListType = {
  brand: {
    brandList: CategoryType[];
  };
};

export default function BrandList(props: PropsType) {
  const {
    isForSelect,
    handleGoBack,
    selectedBrand,
    setShowSidebar,
    handleUpdateBrand,
    handleDeleteBrand,
    handleSelectBrand,
  } = props;

  // redux store data
  const brandList = useSelector(
    (state: BrandListType) => state.brand.brandList
  );

  // handle search
  const handleSearch = (val: string) => {
    console.log({ val });
  };

  return (
    <>
      <div className="h-full overflow-auto pb-20">
        <SidebarHeader
          title="Brand"
          isForSelect={isForSelect}
          placeholder="Search brand"
          handleSearch={handleSearch}
          handleGoBack={handleGoBack}
          handleClose={() => setShowSidebar("")}
          handleAdd={() => setShowSidebar(SIDEBAR.CREATE_BRAND)}
        />
        {/* list item */}
        {brandList.map((item: CategoryType) => {
          let isActive = selectedBrand?.id == item.id;
          return (
            <SidebarListItem
              data={item}
              isActive={isActive}
              isForSelect={isForSelect}
              handleUpdate={handleUpdateBrand}
              handleDelete={handleDeleteBrand}
              handleOnClick={handleSelectBrand}
              key={`SidebarListItem_${item.id}`}
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
