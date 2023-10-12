import PhoneInput, { CountryData } from "react-phone-input-2";
import SidebarContainer from "../common/SidebarContainer";
import { addCustomerAction } from "@/store/customerSlice";
import InputWithLabel from "../common/InputWithLabel";
import { IoIosArrowBack } from "react-icons/io";
import { CustomerType } from "@/helper/types";
import ErrorField from "../common/ErrorField";
import { SIDEBAR } from "@/helper/constant";
import { useDispatch } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { Form, Formik } from "formik";
import Button from "../common/Button";
import { useState } from "react";
import _ from "lodash";

const inputStyle = {
  width: "100%",
  border: "none",
  fontSize: "16px",
};

const buttonStyle = {
  border: "none",
  background: "transparent",
};

type PropsType = {
  showSidebar: string;
  setShowSidebar: Function;
  selectedCustomer?: CustomerType;
};

export default function AddCustomerSidebar(props: PropsType) {
  const { showSidebar, setShowSidebar, selectedCustomer } = props;

  // hooks variables
  const dispatch = useDispatch();

  // useStates
  const [phoneNo, setPhoneNo] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [countryCode, setCountryCode] = useState<string>("");

  const handleClose = () => {
    setPhoneNo("");
    setShowSidebar("");
  };

  // phone input styling
  const containerStyle = {
    borderRadius: "6px",
    background: isFocused ? "#fff" : "initial",
    border: isFocused ? "2px solid #f7841e" : "2px solid #D0D3D6",
  };

  // handle get country code and phone no
  const handleOnChange = (value: string, country: CountryData | any) => {
    setPhoneNo(value);
    setCountryCode(country?.dialCode);
  };

  // handle focus on phone input
  const handleFocus = () => {
    setIsFocused(true);
  };

  // handle blur on phone input
  const handleBlur = () => {
    setIsFocused(false);
  };

  // handle formik custom validation
  const validate = (values: CustomerType) => {
    let errors: any = {};

    if (!values.name) {
      errors.name = "Name is required";
    }

    if (!values.phone) {
      errors.phone = "Phone number is required";
    }

    return errors;
  };

  // handle submit customer data
  const handleSubmitCustomerData = (values: { name: string }) => {
    const payload = {
      ...values,
      countryCode,
      phone: phoneNo,
      id: Number(new Date()),
    };
    console.log({ payload });
    dispatch(addCustomerAction(payload));
    handleClose();
  };

  return (
    <SidebarContainer
      handleClose={handleClose}
      isVisible={showSidebar == SIDEBAR.ADD_CUSTOMER}
    >
      <>
        <div className="sticky top-0 bg-pure flex items-center justify-between border-b border-iron border-opacity-60 max-sm:p-2 p-4">
          <div className="flex items-center">
            <button onClick={handleClose}>
              <IoIosArrowBack className="text-2xl max-sm:text-xl mr-3" />
            </button>
            <h2>
              {_.isEmpty(selectedCustomer)
                ? "Add Customer"
                : "Customer Details"}
            </h2>
          </div>
          <button onClick={handleClose}>
            <RxCross2 className="text-2xl max-sm:text-xl" />
          </button>
        </div>
        <Formik
          initialValues={{
            name: !_.isEmpty(selectedCustomer) ? selectedCustomer.name : "",
            phone: !_.isEmpty(selectedCustomer)
              ? selectedCustomer?.phone
              : phoneNo,
          }}
          validate={validate}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values) => handleSubmitCustomerData(values)}
        >
          {({ handleChange, values, errors }) => {
            return (
              <Form className="p-4">
                <InputWithLabel
                  name="name"
                  placeholder="Name*"
                  error={errors.name}
                  readOnly={!_.isEmpty(selectedCustomer)}
                />
                <div className="relative mt-6">
                  <PhoneInput
                    country={"pk"}
                    onBlur={handleBlur}
                    value={values.phone}
                    onFocus={handleFocus}
                    inputStyle={inputStyle}
                    buttonStyle={buttonStyle}
                    containerStyle={containerStyle}
                    disabled={!_.isEmpty(selectedCustomer)}
                    inputProps={{ name: "phone", autoFocus: false }}
                    onChange={(value, country, e) => {
                      handleChange(e);
                      handleOnChange(value, country);
                    }}
                  />
                  <ErrorField error={errors.phone} />
                </div>
                {_.isEmpty(selectedCustomer) && (
                  <div className="absolute bottom-4 left-0 w-full px-4">
                    <Button type="submit" title="Add Customer" />
                  </div>
                )}
              </Form>
            );
          }}
        </Formik>
      </>
    </SidebarContainer>
  );
}
