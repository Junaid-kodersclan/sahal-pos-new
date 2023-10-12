import { FormikErrorType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import ErrorField from "./ErrorField";
import { Field } from "formik";

type PropsType = {
  name: string;
  label?: string;
  error?: FormikErrorType;
};

export default function Textarea(props: PropsType) {
  const { name, error, label } = props;

  return (
    <div className="relative">
      <label htmlFor={name} className={appStyles.INPUT_LABEL}>
        {label}
      </label>
      <Field
        id={name}
        name={name}
        as="textarea"
        className={`${appStyles.INPUT} min-h-[7rem]`}
      />
      <ErrorField error={error} />
    </div>
  );
}
