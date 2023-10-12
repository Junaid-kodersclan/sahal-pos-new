import { OrderSidebarDataType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import Image from "next/image";
import _ from "lodash";

type PropsType = {
  data: OrderSidebarDataType;
};

export default function OrderSidebarItem(props: PropsType) {
  const { data } = props;
  const { product, qty, price } = data;

  return (
    <div
      className={`${appStyles.FLEX_BETWEEN} border-b border-iron border-opacity-40 py-3 pr-2 mx-2`}
    >
      <div className="flex items-center">
        <Image
          width={100}
          height={100}
          alt="Product image"
          src={product?.gallery[0]}
          className="w-14 h-14 overflow-hidden rounded-lg mr-2"
        />
        <div>
          <h4 className={appStyles.ORDER_DETAIL_ITEM}>{product?.title}</h4>
          <h4 className="text-dull text-sm">{price}</h4>
        </div>
      </div>
      <p className="text-primary font-semibold">
        <span className="text-dull">x</span> {qty}
      </p>
    </div>
  );
}
