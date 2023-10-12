"use client";

import AuthFormInputField from "@/componets/common/AuthFormInputField";
import Button from "@/componets/common/Button";
import { MdPassword } from "react-icons/md";
import { useRouter } from "next/navigation";
import { appStyles } from "@/theme/appStyles";
import { routes } from "@/helper/routes";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { useState } from "react";

let schema = object({
  otp: string().max(6).min(4).required("OTP is a required field"),
});

let initialValues = {
  otp: "",
};

export default function OtpVerificationPage() {
  // hooks and variables
  const router = useRouter();

  // useState hook's states
  const [loading, setLoading] = useState<boolean>(false);

  // handle user verify otp
  const handleOtpVerification = (obj: { otp: string }) => {
    setLoading(true);
    console.log({ obj });
    setLoading(false);
    router.push(routes.createPassword);
  };

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(values) => handleOtpVerification(values)}
    >
      {({ errors }) => {
        return (
          <Form className={`${appStyles.AUTH_FORM}`}>
            <h1 className={`${appStyles.AUTH_FORM_TITLE}`}>Verify code</h1>
            <AuthFormInputField
              type="text"
              name="otp"
              lable="Verify your account"
              placeholder="Enter your OTP"
              error={errors.otp}
              icon={<MdPassword />}
            />
            <Button type="submit" title={"Verify"} isloading={loading} />
          </Form>
        );
      }}
    </Formik>
  );
}
