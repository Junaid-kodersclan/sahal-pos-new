import InputWithLabel from "../common/InputWithLabel";
import { FormikErrorType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import Textarea from "../common/Textarea";

type PropsType = {
  titleError: FormikErrorType;
};

export default function BasicInfoBox(props: PropsType) {
  const { titleError } = props;

  return (
    <section className={appStyles.ADD_PRODUCT_BOX}>
      <div className={appStyles.BOX_TITLE_WRAPPER}>
        <h3 className={appStyles.BOX_TITLE}>Basic Info</h3>
        <p className={appStyles.BOX_DESC}>
          Add some basic info about your store from here
        </p>
      </div>
      <div className={`${appStyles.CONTENT_BOX_WRAPPER}`}>
        <InputWithLabel label="Store name" name="title" error={titleError} />
        <Textarea name="desc" label="Description" />
      </div>
    </section>
  );
}
