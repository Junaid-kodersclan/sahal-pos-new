import { FormikErrorType } from "@/helper/types";
import ErrorField from "../common/ErrorField";
import { appStyles } from "@/theme/appStyles";
import { useMemo } from "react";
import _ from "lodash";

type ButtonPropsType = {
  label: string;
  error?: FormikErrorType;
  handleOnClick: () => void;
  value: string | any[] | any;
};

export const BrandAndCateoryButton = (props: ButtonPropsType) => {
  const { label, value, error, handleOnClick } = props;

  const handleArrangeData = useMemo(() => {
    if (value && _.isArray(value) && !_.isEmpty(value)) {
      return value.map(
        (item, index) => `${item.title}${index + 1 == value.length ? "" : ", "}`
      );
    }

    if (value && _.isObject(value) && !_.isEmpty(value)) {
      // @ts-ignore
      return value.title;
    }

    if (value && _.isString(value)) {
      return value;
    }

    return "Select...";
  }, [value]);

  return (
    <div className="relative">
      <label htmlFor={label} className={appStyles.INPUT_LABEL}>
        {label}
      </label>
      <button
        id={label}
        type="button"
        onClick={handleOnClick}
        className={`${appStyles.INPUT} text-left capitalize truncate`}
      >
        {handleArrangeData}
      </button>
      <ErrorField error={error} />
    </div>
  );
};
