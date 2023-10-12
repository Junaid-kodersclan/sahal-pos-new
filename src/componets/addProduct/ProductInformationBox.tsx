import InputWithLabel from "../common/InputWithLabel";
import { appStyles } from "@/theme/appStyles";

type PropsType = {
  errors: any;
};

export default function ProductInformationBox(props: PropsType) {
  const { errors } = props;

  return (
    <section className={appStyles.ADD_PRODUCT_BOX}>
      <div className={appStyles.BOX_TITLE_WRAPPER}>
        <h3 className={appStyles.BOX_TITLE}>Simple Product Information</h3>
        <p className={appStyles.BOX_DESC}>
          Add your simple product description and necessary information from
          here
        </p>
      </div>
      <div className={`${appStyles.CONTENT_BOX_WRAPPER}`}>
        <InputWithLabel
          type="number"
          name="actualCost"
          label="Actual Cost"
          placeholder="0"
          error={errors?.actualCost}
        />
        <InputWithLabel
          type="number"
          name="price"
          label="Price"
          placeholder="0"
          error={errors?.price}
        />
        <InputWithLabel
          type="number"
          name="discount"
          label="Discount"
          placeholder="0"
          error={errors?.discount}
        />
        <InputWithLabel
          type="number"
          name="stock"
          label="Stock"
          placeholder="0"
          error={errors?.stock}
        />
        <InputWithLabel
          name="sku"
          label="Sku"
          placeholder="Sku"
          error={errors?.sku}
        />
      </div>
    </section>
  );
}
