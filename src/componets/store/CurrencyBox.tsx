import InputWithDropdown from "./InputWithDropdown";
import { FormikErrorType } from "@/helper/types";
import { CURRENCY_LIST } from "@/helper/data";
import { appStyles } from "@/theme/appStyles";
import { FocusEventHandler } from "react";
import _ from "lodash";

type PropsType = {
  values: any;
  setFieldValue: Function;
  errors: FormikErrorType | any;
  handleBlur: FocusEventHandler<HTMLInputElement>;
};

export default function CurrencyBox(props: PropsType) {
  const { errors, values, handleBlur, setFieldValue } = props;

  return (
    <section className={appStyles.ADD_PRODUCT_BOX}>
      <div className={appStyles.BOX_TITLE_WRAPPER}>
        <h3 className={appStyles.BOX_TITLE}>Currency</h3>
        <p className={appStyles.BOX_DESC}>Add your contact details from here</p>
      </div>
      <div className={`${appStyles.CONTENT_BOX_WRAPPER}`}>
        <InputWithDropdown
          name="currency"
          label="Currency"
          options={CURRENCY_LIST}
          error={errors.currency}
          handleBlur={handleBlur}
          value={values.currency}
          setFieldValue={setFieldValue}
        />
      </div>
    </section>
  );
}
