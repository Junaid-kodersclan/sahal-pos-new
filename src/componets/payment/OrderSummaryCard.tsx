import { appStyles } from "@/theme/appStyles";
import { useState } from "react";
import ErrorField from "../common/ErrorField";

const currency = "PKR";
const totalPrice = 2000;

type PropsType = {
  discountError: string;
  handleAddDiscount: Function;
};

export default function OrderSummaryCard(props: PropsType) {
  const { handleAddDiscount, discountError } = props;

  const [discountVal, setDiscountVal] = useState<string>("");

  return (
    <div className={appStyles.PAYMENT_BOX}>
      <h6 className="font-medium">Order summary</h6>
      <div className={`${appStyles.FLEX_BETWEEN} py-4`}>
        <p className="text-sm">Products subtotal</p>
        <p className="font-semibold">{`${currency} ${totalPrice}`}</p>
      </div>
      <div className="flex items-center">
        <p className="text-sm mr-20 max-xl:mr-10 max-lg:mr-5 max-md:mr-10">
          Discounts
        </p>
        <div className="flex items-center w-full relative">
          <input
            type="text"
            value={discountVal}
            placeholder="Discount coupon"
            onChange={(e) => setDiscountVal(e.target.value)}
            className="w-full outline-none border-r-0 border-2 border-iron border-opacity-60 focus-within:border-primary rounded-s-lg text-sm px-4 py-2"
          />
          <button
            onClick={() => handleAddDiscount(discountVal)}
            className="bg-primary hover:bg-ecstasy text-pure font-medium text-sm px-10 max-xl:px-6 max-lg:px-3 max-md:px-6 py-2.5 rounded-e-lg transition-all duration-300"
          >
            Check
          </button>
          <ErrorField error={discountError} />
        </div>
      </div>
      <div className="flex items-center justify-between border-t border-iron text-lg font-semibold pt-4 mt-6">
        <p>Total</p>
        <p>{`${currency} ${totalPrice}`}</p>
      </div>
    </div>
  );
}
