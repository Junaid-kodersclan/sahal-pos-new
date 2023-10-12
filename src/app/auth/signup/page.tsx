"use client";

import { HiOutlineAtSymbol, HiOutlineLockClosed } from "react-icons/hi";
import AuthFormInputField from "@/componets/common/AuthFormInputField";
import GoogleSignInButton from "@/componets/common/GoogleSignInButton";
import ErrorField from "@/componets/common/ErrorField";
import { addUserAction } from "@/store/userSlice";
import Button from "@/componets/common/Button";
import { endpoints } from "@/axios/endpoints";
import { appStyles } from "@/theme/appStyles";
import { Field, Form, Formik } from "formik";
import { useRouter } from "next/navigation";
import { bool, object, string } from "yup";
import { useDispatch } from "react-redux";
import { postRequest } from "@/axios/api";
import { BsPerson } from "react-icons/bs";
import { AuthType } from "@/helper/types";
import { routes } from "@/helper/routes";
import { useState } from "react";
import Link from "next/link";

let schema = object({
  name: string().required("Name is a required field"),
  email: string().email().required("Email is a required field"),
  password: string().max(12).min(8).required("Password is a required field"),
  acceptTerms: bool().oneOf([true], "Accept Terms & Conditions is required"),
});

let initialValues = {
  name: "",
  email: "",
  password: "",
  acceptTerms: false,
};

export default function SignUpPage() {
  // hooks variables
  const router = useRouter();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(false);

  // handle user login
  const handleSignUp = (obj: AuthType) => {
    setLoading(true);
    console.log({ obj });
    setLoading(false);

    // setLoading(true);
    // const payload = {name: obj.name, email: obj.email, password: obj.password};
    // postRequest(
    //   endpoints.register,payload,
    //   (res: any) => {
    //     if (res.data) {
    //       dispatch(addUserAction({ name: obj.name, email: obj.email }));
    //       setLoading(false);
    //       router.push(routes.verifyOtp);
    //     }
    //   },
    //   () => setLoading(false)
    // );
  };

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={schema}
      initialValues={initialValues}
      onSubmit={(values) => handleSignUp(values)}
    >
      {({ errors }) => (
        <Form className={`${appStyles.AUTH_FORM}`}>
          <h1 className={`${appStyles.AUTH_FORM_TITLE}`}>Sign Up</h1>
          <AuthFormInputField
            type="text"
            name="name"
            lable="Name"
            placeholder="Enter your name"
            error={errors.name}
            icon={<BsPerson />}
          />
          <AuthFormInputField
            type="text"
            name="email"
            lable="Email"
            placeholder="Enter your email"
            error={errors.email}
            icon={<HiOutlineAtSymbol />}
          />
          <AuthFormInputField
            type="password"
            name="password"
            lable="Password"
            placeholder="Enter your password"
            error={errors.password}
            icon={<HiOutlineLockClosed />}
          />
          <div className="pt-4 my-4 relative">
            <div className="flex">
              <Field type="checkbox" name="acceptTerms" id="acceptTerms" />
              <label htmlFor="acceptTerms" className="pl-2 text-xs">
                By signing below, you agree to the
                <span className={`${appStyles.AUTH_TERMS_CONDITIONS}`}>
                  Terms of use
                </span>
                and
                <span className={`${appStyles.AUTH_TERMS_CONDITIONS}`}>
                  Privacy notice
                </span>
              </label>
            </div>
            <ErrorField error={errors.acceptTerms} />
          </div>
          <Button type="submit" title={"Sign up"} isloading={loading} />
          <GoogleSignInButton />
          <p className={`${appStyles.AUTH_MESSAGE}`}>
            Have already an account?
            <Link
              href={routes.signin}
              className={`${appStyles.AUTH_TERMS_CONDITIONS}`}
            >
              Sign in
            </Link>
          </p>
        </Form>
      )}
    </Formik>
  );
}
