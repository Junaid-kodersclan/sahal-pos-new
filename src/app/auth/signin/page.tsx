"use client";

import { HiOutlineAtSymbol, HiOutlineLockClosed } from "react-icons/hi";
import AuthFormInputField from "@/componets/common/AuthFormInputField";
import GoogleSignInButton from "@/componets/common/GoogleSignInButton";
import { addUserAction } from "@/store/userSlice";
import Button from "@/componets/common/Button";
import { appStyles } from "@/theme/appStyles";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { AuthType } from "@/helper/types";
import { routes } from "@/helper/routes";
import { Form, Formik } from "formik";
import { object, string } from "yup";
import { useState } from "react";
import Link from "next/link";

let schema = object({
  email: string().email().required("Email is a required field"),
  password: string().max(12).min(8).required("Password is a required field"),
});

let initialValues = {
  email: "",
  password: "",
};

export default function SignInPage() {
  // hooks variables
  const router = useRouter();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  // handle user login
  const handleLogin = (obj: AuthType) => {
    setLoading(true);
    console.log({ obj });
    dispatch(addUserAction({ email: obj.email }));
    router.push(routes.sell);
    setLoading(false);
  };

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(values) => handleLogin(values)}
    >
      {({ errors }) => {
        return (
          <Form className={`${appStyles.AUTH_FORM}`}>
            <h1 className={`${appStyles.AUTH_FORM_TITLE}`}>Sign In</h1>
            <AuthFormInputField
              type="text"
              name="email"
              lable="Email"
              error={errors.email}
              placeholder="Enter your email"
              icon={<HiOutlineAtSymbol />}
            />
            <AuthFormInputField
              type="password"
              name="password"
              lable="Password"
              error={errors.password}
              placeholder="Enter your password"
              icon={<HiOutlineLockClosed />}
            />
            <Link
              href={routes.forgetPassword}
              className="text-primary self-end text-sm font-semibold mt-4 mb-8"
            >
              Forgot password?
            </Link>
            <Button title={"Sign in"} isloading={loading} type="submit" />
            <GoogleSignInButton isloading={false} loaderColor="" />
            <p className={appStyles.AUTH_MESSAGE}>
              Don&apos;t have account yet?
              <Link
                href={routes.signup}
                className={`${appStyles.AUTH_TERMS_CONDITIONS}`}
              >
                Sign up
              </Link>
            </p>
          </Form>
        );
      }}
    </Formik>
  );
}
