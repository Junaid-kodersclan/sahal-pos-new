import ProfileGoBackButton from "./ProfileGoBackButton";
import InputWithLabel from "../common/InputWithLabel";
import { appStyles } from "@/theme/appStyles";
import { Formik, Form } from "formik";
import Button from "../common/Button";
import { object, ref, string } from "yup";

let Schema = object({
  password: string().max(12).min(8).required("Password is a required field"),
  confirmPassword: string()
    .oneOf([ref("password")], "passwords must match")
    .required("Confirm password is a required field"),
});

let initialValues = {
  password: "",
  confirmPassword: "",
};

type PropsType = {
  handleGoToOptions: () => void;
};

export default function LoginAndPassword(props: PropsType) {
  const { handleGoToOptions } = props;

  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={Schema}
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors }) => {
        return (
          <Form className="md:w-2/3">
            <div className="flex items-center text-txt">
              <ProfileGoBackButton handleGoToOptions={handleGoToOptions} />
              <h3 className={appStyles.PROFILE_FORM_TITLE}>Login & Password</h3>
            </div>
            <p className={appStyles.PROFILE_FORM_DESC}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              voluptate veritatis cumque possimus ut, laudantium, eum repellat
              illum eius tempore,
            </p>
            <div className={appStyles.PROFILE_FORM_INPUT_WRAPPER}>
              <InputWithLabel
                type="password"
                name="password"
                label="Password"
                error={errors.password}
              />
              <InputWithLabel
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                error={errors.confirmPassword}
              />
            </div>
            <div className="flex items-center justify-center">
              <div className="w-52">
                <Button type="submit" title="Save Changes" />
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
