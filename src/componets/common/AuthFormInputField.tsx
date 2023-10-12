import ErrorField from "./ErrorField";
import { ReactElement } from "react";
import { Field } from "formik";

type PropsType = {
  type: string;
  name: string;
  lable?: string;
  icon?: ReactElement;
  placeholder?: string;
  error: string | undefined;
};

export default function AuthFormInputField(props: PropsType) {
  const { type, name, icon, lable, placeholder, error } = props;

  return (
    <div className="flex flex-col mb-3 relative w-full">
      {lable && (
        <label className="mt-4 max-sm:mt-2 max-sm:text-sm" htmlFor={name}>
          {lable}
        </label>
      )}
      <div className="w-full flex items-center bg-pure border border-iron rounded-lg mt-1 py-0.5">
        {icon && (
          <span className="text-2xl text-primary pl-3 pr-2">{icon}</span>
        )}
        <Field
          id={name}
          as="input"
          name={name}
          type={type}
          placeholder={placeholder}
          className="bg-pure border-none outline-none w-full px-2 py-3 max-sm:py-2 text-sm"
        />
      </div>
      <ErrorField error={error} />
    </div>
  );
}
