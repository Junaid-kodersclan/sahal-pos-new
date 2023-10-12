import InputWithLabel from "../common/InputWithLabel";
import { FormikErrorType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";

type PropsType = {
  errors: FormikErrorType | any;
};

export default function ContactDetailBox(props: PropsType) {
  const { errors } = props;

  return (
    <section className={appStyles.ADD_PRODUCT_BOX}>
      <div className={appStyles.BOX_TITLE_WRAPPER}>
        <h3 className={appStyles.BOX_TITLE}>Contact Details</h3>
        <p className={appStyles.BOX_DESC}>Add your contact details from here</p>
      </div>
      <div className={`${appStyles.CONTENT_BOX_WRAPPER}`}>
        <InputWithLabel label="Contact" name="phone" error={errors.phone} />
        <InputWithLabel label="Email" name="email" error={errors.email} />
      </div>
    </section>
  );
}
