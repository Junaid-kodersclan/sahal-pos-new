import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { PRODUCT_LIST } from "@/helper/data";
import { ProductType } from "@/helper/types";
import OrderListItem from "./OrderListItem";
import { appStyles } from "@/theme/appStyles";
import { useState } from "react";

type PropsType = {};

export default function OrderItemListCard(props: PropsType) {
  const {} = props;

  const [showItems, setShowItems] = useState<boolean>(false);

  const handleToggleItems = () => {
    setShowItems((prev) => !prev);
  };

  return (
    <div className={appStyles.PAYMENT_BOX}>
      <button
        onClick={handleToggleItems}
        className={`${appStyles.FLEX_BETWEEN} w-full`}
      >
        <h6 className="font-medium">{10} Items</h6>
        <div
          className={`${appStyles.FLEX_CENTER} hover:bg-porcelain transition-all duration-300 rounded-md p-2`}
        >
          {showItems ? <SlArrowUp /> : <SlArrowDown />}
        </div>
      </button>
      {showItems &&
        PRODUCT_LIST?.map((item: ProductType) => {
          return (
            <OrderListItem data={item} key={`OrderListItem__${item.id}`} />
          );
        })}
    </div>
  );
}
