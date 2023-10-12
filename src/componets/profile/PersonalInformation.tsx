import ProfileGoBackButton from "./ProfileGoBackButton";
import InputWithLabel from "../common/InputWithLabel";
import { appStyles } from "@/theme/appStyles";
import Button from "../common/Button";
import { Formik, Form } from "formik";
import { object, string } from "yup";

let Schema = object({
  email: string().email().required("Email is a required field"),
  firstName: string().required("First name is a required field"),
  lastName: string().required("Last name is a required field"),
  phoneNo: string().required("Phone number is a required field"),
  dateOfBirth: string().required("Date of birth is a required field"),
  position: string().required("Position is a required field"),
});

let initialValues = {
  email: "",
  firstName: "",
  lastName: "",
  phoneNo: "",
  dateOfBirth: "",
  position: "",
};

type PropsType = {
  handleGoToOptions: () => void;
};

export default function PersonalInformation(props: PropsType) {
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
            <div className="flex items-center text-txt w-full">
              <ProfileGoBackButton handleGoToOptions={handleGoToOptions} />
              <h3 className={appStyles.PROFILE_FORM_TITLE}>
                Personal Information
              </h3>
            </div>
            <p className={appStyles.PROFILE_FORM_DESC}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              voluptate veritatis cumque possimus ut, laudantium, eum repellat
              illum eius tempore,
            </p>
            <div className={appStyles.PROFILE_FORM_INPUT_WRAPPER}>
              <InputWithLabel
                name="firstName"
                label="First Name"
                error={errors.firstName}
              />
              <InputWithLabel
                name="lastName"
                label="Last Name"
                error={errors.lastName}
              />
              <InputWithLabel name="email" label="Email" error={errors.email} />
              <InputWithLabel
                name="phoneNo"
                label="Phone Number"
                error={errors.phoneNo}
              />
              <InputWithLabel
                type="date"
                name="dateOfBirth"
                label="Date Of Birth"
                error={errors.dateOfBirth}
              />
              <InputWithLabel
                name="position"
                label="Position"
                error={errors.position}
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
