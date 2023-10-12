import { FormikErrorType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import ErrorField from "./ErrorField";
import { Field } from "formik";

type PropsType = {
  name: string;
  type?: string;
  label?: string;
  readOnly?: boolean;
  placeholder?: string;
  error?: FormikErrorType;
};

export default function InputWithLabel(props: PropsType) {
  const { name, error, type, label, readOnly, placeholder } = props;

  return (
    <div className="relative">
      {label && (
        <label htmlFor={name} className={appStyles.INPUT_LABEL}>
          {label}
        </label>
      )}
      <Field
        as="input"
        id={name}
        name={name}
        readOnly={readOnly}
        placeholder={placeholder}
        type={type ? type : "text"}
        className={appStyles.INPUT}
      />
      <ErrorField error={error} />
    </div>
  );
}
