import { BrandAndCateoryButton } from "./BrandAndCategoryButton";
import { CategoryType } from "@/helper/types";
import { SIDEBAR } from "@/helper/constant";
import { appStyles } from "@/theme/appStyles";
import _ from "lodash";

type PropsType = {
  errors: any;
  setShowSidebar: Function;
  selectedBrand: CategoryType;
  selectedCategories: CategoryType[];
};

export default function BrandAndCategoryBox(props: PropsType) {
  const { errors, setShowSidebar, selectedBrand, selectedCategories } = props;

  return (
    <section className={appStyles.ADD_PRODUCT_BOX}>
      <div className={appStyles.BOX_TITLE_WRAPPER}>
        <h3 className={appStyles.BOX_TITLE}>Brands & Categories</h3>
        <p className={appStyles.BOX_DESC}>
          Select product brand and categories from here
        </p>
      </div>
      <div className={`${appStyles.CONTENT_BOX_WRAPPER}`}>
        <BrandAndCateoryButton
          label="Brand*"
          error={errors?.brand}
          handleOnClick={() => setShowSidebar(SIDEBAR.BRAND)}
          value={selectedBrand?.title}
        />
        <BrandAndCateoryButton
          label="Categories"
          error={errors?.category}
          value={selectedCategories}
          handleOnClick={() => setShowSidebar(SIDEBAR.CATEGORY)}
        />
      </div>
    </section>
  );
}
