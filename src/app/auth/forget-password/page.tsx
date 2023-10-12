"use client";

import AuthFormInputField from "@/componets/common/AuthFormInputField";
import { HiOutlineAtSymbol } from "react-icons/hi";
import Button from "@/componets/common/Button";
import { appStyles } from "@/theme/appStyles";
import { useRouter } from "next/navigation";
import { routes } from "@/helper/routes";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { useState } from "react";

let schema = object({
  email: string().email().required("Email is a required field"),
});

let initialValues = {
  email: "",
};

export default function ForgetPasswordPage() {
  // hooks and variables
  const router = useRouter();

  // useState hook's states
  const [loading, setLoading] = useState<boolean>(false);

  // handle user forget password
  const handleForgetPassword = (obj: { email: string }) => {
    setLoading(true);
    console.log({ obj });
    setLoading(false);
    router.push(routes.verifyOtp);
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
              type="text"
              name="email"
              lable="Email"
              error={errors.email}
              placeholder="Enter your email"
              icon={<HiOutlineAtSymbol />}
            />
            <Button type="submit" title={"Next"} isloading={loading} />
          </Form>
        );
      }}
    </Formik>
  );
}
