"use client";

import ProductInformationBox from "@/componets/addProduct/ProductInformationBox";
import BrandAndCategoryBox from "@/componets/addProduct/BrandAndCategoryBox";
import { CategoryType, ProductType, StoreType } from "@/helper/types";
import SidebarContainer from "@/componets/common/SidebarContainer";
import DescriptionBox from "@/componets/addProduct/DescriptionBox";
import CategorySidebar from "@/componets/product/CategorySidebar";
import BrandSidebar from "@/componets/product/BrandSidebar";
import ImageBox from "@/componets/addProduct/ImageBox";
import Button from "@/componets/common/Button";
import { appStyles } from "@/theme/appStyles";
import { number, object, string } from "yup";
import { SIDEBAR } from "@/helper/constant";
import { Form, Formik } from "formik";
import { useState } from "react";
import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { addProductAction } from "@/store/productSlice";
import { handleArray, successToast } from "@/helper/util";

type StoreDataType = { store: { storeList: StoreType[] } };

let Schema = object({
  sku: string(),
  desc: string(),
  discount: number(),
  actualCost: number(),
  title: string().required("Title is a required field"),
  stock: number().required().min(1, "Stock not be zero (0)"),
  price: number().required().min(1, "Price not be zero (0)"),
});

export default function AddProductPage() {
  // hooks variables
  const dispatch = useDispatch();

  // redux store data
  const storeData = useSelector(
    (state: StoreDataType) => state.store.storeList[0]
  );

  // useStates
  const [showSidebar, setShowSidebar] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<CategoryType | any>({});
  const [selectedCategories, setSelectedCategories] = useState<CategoryType[]>(
    []
  );

  const handleClose = () => {
    setShowSidebar("");
  };

  // handle select category
  const handleSelectCategory = (obj: CategoryType) => {
    let findIndex = _.findIndex(selectedCategories, ["id", obj.id]);
    const temp = _.cloneDeep(selectedCategories);

    if (findIndex >= 0) {
      temp.splice(findIndex, 1);
      return setSelectedCategories(temp);
    }

    temp.push(obj);
    return setSelectedCategories(temp);
  };

  // handle select brand
  const handleSelectBrand = (obj: CategoryType) => {
    setSelectedBrand(obj);
  };

  // formik custom validation function
  const validate = () => {
    const errors: any = {};

    if (_.isEmpty(selectedBrand)) {
      errors.brand = "Brand is required";
    }

    if (_.isEmpty(selectedCategories)) {
      errors.category = "Category is required";
    }

    return errors;
  };

  const handleAddProduct = (obj: ProductType) => {
    // todo remove hardcode images from gallery
    const payload = {
      id: Number(new Date()),
      title: obj.title,
      storeId: Number(storeData?.id),
      categoryId: handleArray(selectedCategories, "id"),
      brandId: Number(selectedBrand.id),
      stock: Number(obj.stock),
      price: Number(obj.price),
      discountPrice: Number(obj.discount),
      actualCost: Number(obj.actualCost),
      desc: obj.desc,
      sku: obj.sku,
      gallery: [
        "https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_1280.jpg",
        "https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111.jpg",
      ],
    };

    console.log(payload);

    dispatch(addProductAction(payload));
    successToast("Product added successfully");
  };

  return (
    <>
      <Formik
        initialValues={{
          sku: "",
          desc: "",
          title: "",
          stock: null,
          price: null,
          discount: null,
          actualCost: null,
        }}
        validate={validate}
        validateOnBlur={false}
        validateOnChange={false}
        validationSchema={Schema}
        enableReinitialize={true}
        onSubmit={(values) => handleAddProduct(values)}
      >
        {({ errors }) => {
          return (
            <Form className={appStyles.STORE_AND_ADD_PRODUCT_FORM}>
              <h3 className="text-xl text-txt font-semibold border-b border-dashed border-iron py-6">
                Create New Product
              </h3>
              <ImageBox
                title="Featured Image"
                desc="Upload your product featured image here"
              />
              <ImageBox
                title="Gallery"
                desc="Upload your product image gallery here"
              />
              <BrandAndCategoryBox
                errors={errors}
                selectedBrand={selectedBrand}
                setShowSidebar={setShowSidebar}
                selectedCategories={selectedCategories}
              />
              <DescriptionBox titleError={errors.title} />
              <ProductInformationBox errors={errors} />
              <div className="w-40 self-end mt-4 -mb-4">
                <Button type="submit" title="Add product" />
              </div>
            </Form>
          );
        }}
      </Formik>
      <SidebarContainer
        handleClose={handleClose}
        isVisible={
          showSidebar == SIDEBAR.CATEGORY || showSidebar == SIDEBAR.BRAND
        }
      >
        <>
          {/*  BRAND_SIDEBAR  */}
          <BrandSidebar
            isForSelect
            showSidebar={showSidebar}
            handleGoBack={handleClose}
            selectedBrand={selectedBrand}
            setShowSidebar={setShowSidebar}
            handleSelectBrand={handleSelectBrand}
          />
          {/*  CATEGORY_SIDEBAR  */}
          <CategorySidebar
            isForMultipleSelect
            showSidebar={showSidebar}
            handleGoBack={handleClose}
            setShowSidebar={setShowSidebar}
            selectedCategories={selectedCategories}
            handleSelectCategory={handleSelectCategory}
          />
        </>
      </SidebarContainer>
    </>
  );
}
