import { FormikErrorType } from "@/helper/types";
import ErrorField from "../common/ErrorField";
import { FocusEventHandler } from "react";
import { appStyles } from "@/theme/appStyles";
import { colors } from "@/theme/colors";
import Select from "react-select";
import _ from "lodash";

//  todo remove type (any)
type PropsType = {
  value: any;
  name: string;
  label: String;
  error: FormikErrorType;
  setFieldValue: Function;
  options: any[] | undefined;
  handleBlur: FocusEventHandler<HTMLInputElement>;
};

export default function InputWithDropdown(props: PropsType) {
  const { name, label, value, error, options, handleBlur, setFieldValue } =
    props;

  return (
    <div className="relative">
      <label htmlFor={name} className={appStyles.INPUT_LABEL}>
        {label}
      </label>
      <Select
        id={name}
        name={name}
        onBlur={handleBlur}
        options={options}
        onChange={(value) => setFieldValue(name, value)}
        value={_.isString(value) ? { value: value, label: value } : value}
        // react select styling //
        styles={{
          control: (state) => ({
            borderColor: state.isFocused ? colors.primary : colors.iron,
            borderRadius: "8px",
            borderWidth: "2px",
            padding: "2px",
            display: "flex",
          }),
        }}
      />
      <ErrorField error={error} />
    </div>
  );
}
