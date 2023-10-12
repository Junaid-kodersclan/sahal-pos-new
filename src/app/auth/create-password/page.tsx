"use client";

import AuthFormInputField from "@/componets/common/AuthFormInputField";
import { HiOutlineLockClosed } from "react-icons/hi";
import Button from "@/componets/common/Button";
import { appStyles } from "@/theme/appStyles";
import { useRouter } from "next/navigation";
import { object, ref, string } from "yup";
import { routes } from "@/helper/routes";
import { Form, Formik } from "formik";
import { useState } from "react";

let schema = object({
  password: string().max(12).min(8).required("Password is a required field"),
  confirmPassword: string()
    .oneOf([ref("password")], "passwords must match")
    .required("Confirm password is a required field"),
});

let initialValues = {
  password: "",
  confirmPassword: "",
};

export default function CreatePasswordPage() {
  // hooks and variables
  const router = useRouter();

  // useState hook's states
  const [loading, setLoading] = useState<boolean>(false);

  // handle user forget password
  const handleForgetPassword = (obj: {
    password: string;
    confirmPassword: string;
  }) => {
    setLoading(true);
    console.log({ obj });
    setLoading(false);
    router.push(routes.signin);
  };

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(values) => handleForgetPassword(values)}
    >
      {({ errors }) => {
        return (
          <Form className={`${appStyles.AUTH_FORM}`}>
            <h1 className={`${appStyles.AUTH_FORM_TITLE}`}>Forgot Password</h1>
            <AuthFormInputField
              type="password"
              name="password"
              lable="Password"
              placeholder="Create password"
              error={errors.password}
              icon={<HiOutlineLockClosed />}
            />
            <AuthFormInputField
              type="password"
              name="confirmPassword"
              lable="Confirm password"
              placeholder="Confirm password"
              error={errors.confirmPassword}
              icon={<HiOutlineLockClosed />}
            />
            <Button type="submit" title={"Next"} isloading={loading} />
          </Form>
        );
      }}
    </Formik>
  );
}
