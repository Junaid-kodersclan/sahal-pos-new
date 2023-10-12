"use client";

import { addStoreAction, updateStoreAction } from "@/store/storeSlice";
import { useDispatch, useSelector } from "react-redux";
import ContactDetailBox from "./ContactDetailBox";
import "react-toastify/dist/ReactToastify.css";
import ImageBox from "../addProduct/ImageBox";
import { appStyles } from "@/theme/appStyles";
import { successToast } from "@/helper/util";
import { StoreType } from "@/helper/types";
import BasicInfoBox from "./BasicInfoBox";
import CurrencyBox from "./CurrencyBox";
import AddressBox from "./AddressBox";
import Button from "../common/Button";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import _ from "lodash";

const Schema = object({
  title: string().required("Name is a required field"),
  phone: string().required("Phone is a required field"),
  address: string().required("Address is a required field"),
  desc: string().required("Description is a required field"),
  email: string().email().required("Email is a required field"),
});

type PropsType = {};
type StateType = {
  store: {
    storeList: StoreType[];
  };
};

export default function GeneralTab(props: PropsType) {
  const {} = props;

  // hooks variables
  const dispatch = useDispatch();

  // redux store data
  const storeData = useSelector((state: StateType) => state.store.storeList[0]);

  // formik custom validation function
  const validate = (values: any) => {
    const errors: any = {};

    if (!values.country) {
      errors.country = "Country is a required field";
    }

    if (!values.state) {
      errors.state = "State is a required field";
    }

    if (!values.city) {
      errors.city = "City is a required field";
    }

    if (!values.currency) {
      errors.currency = "Currency is a required field";
    }

    return errors;
  };

  // handle add store
  const handleAddStore = (obj: StoreType) => {
    const payload = {
      logo: "",
      title: obj.title,
      email: obj.email,
      currency: obj?.currency,
      address: obj.address,
      country: obj.country,
      state: obj.state,
      city: obj.city,
      phone: obj.phone,
      phoneCode: "+92",
      desc: obj.desc,
    };

    dispatch(addStoreAction(payload));
    successToast("Store added successfully ");
  };

  // handle update store
  const handleUpdateStore = (obj: StoreType) => {
    const payload = {
      title: obj.title,
      email: obj.email,
      logo: obj.logo,
      currency: obj?.currency,
      address: obj.address,
      web: obj.web,
      country: obj.country,
      state: obj.state,
      city: obj.city,
      phone: obj.phone,
      phoneCode: "+92",
      desc: obj.desc,
    };

    dispatch(updateStoreAction(payload));
    successToast("Store update successfully ");
  };

  // handle check store for add or update
  const handleAddOrUpdateStore = (obj: StoreType) => {
    if (!_.isEmpty(storeData)) {
      return handleUpdateStore(obj);
    }

    handleAddStore(obj);
  };

  return (
    <Formik
      initialValues={{
        desc: storeData?.desc ? storeData.desc : "",
        city: storeData?.city ? storeData.city : "",
        title: storeData?.title ? storeData.title : "",
        email: storeData?.email ? storeData.email : "",
        phone: storeData?.phone ? storeData.phone : "",
        state: storeData?.state ? storeData.state : "",
        address: storeData?.address ? storeData.address : "",
        country: storeData?.country ? storeData?.country : "",
      }}
      validate={validate}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={Schema}
      enableReinitialize={true}
      onSubmit={(values: any) => handleAddOrUpdateStore(values)}
    >
      {({ values, errors, setFieldValue, handleBlur }) => {
        return (
          <Form className={appStyles.STORE_AND_ADD_PRODUCT_FORM}>
            <ImageBox title="Logo" desc="Upload your store logo from here" />
            <BasicInfoBox titleError={errors.title} />
            <AddressBox
              values={values}
              errors={errors}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
            />
            <ContactDetailBox errors={errors} />
            <CurrencyBox
              errors={errors}
              values={values}
              handleBlur={handleBlur}
              setFieldValue={setFieldValue}
            />
            <div className="w-40 self-end mt-4 -mb-4">
              <Button
                type="submit"
                title={_.isEmpty(storeData) ? "Add" : "Update"}
              />
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
