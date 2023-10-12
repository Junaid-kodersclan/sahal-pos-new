import { ProductType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import Image from "next/image";

const currency = "PKR";

type PropsType = {
  data: ProductType;
};

export default function OrderListItem(props: PropsType) {
  const { data } = props;
  const { title, qty, gallery, price } = data;

  return (
    <div
      className={`${appStyles.FLEX_BETWEEN} border-b border-iron border-opacity-50 py-4`}
    >
      <div className="flex items-center space-x-3 text-sm">
        <Image
          width={100}
          height={100}
          alt={title}
          src={gallery ? gallery[0] : ""}
          className="w-12 h-12 rounded-md"
        />
        <span>{qty}x</span>
        <div>
          <h6 className="font-semibold text-base">{title}</h6>
          <p>{`${currency} ${qty && price && qty * price}`}</p>
        </div>
      </div>
      <p>{`${currency} ${price}`}</p>
    </div>
  );
}
