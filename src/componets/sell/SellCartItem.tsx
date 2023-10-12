import { FiMinus, FiPlus, FiX } from "react-icons/fi";
import { appStyles } from "@/theme/appStyles";
import { ProductType } from "@/helper/types";
import Image from "next/image";

const currency = "PKR";

type PropsType = {
  data: ProductType;
};

export default function SellCartItem(props: PropsType) {
  const { data } = props;

  return (
    <div className="flex items-center border-b border-iron border-opacity-40 py-2 font-bold">
      <div className="w-[5rem] h-[4.5rem] rounded-xl overflow-hidden">
        <Image
          width={100}
          height={100}
          alt={data?.title}
          src={data?.gallery ? data?.gallery[0] : ""}
          className="w-full h-full"
        />
      </div>
      <div className="flex justify-between w-full p-2">
        <div className="space-y-1">
          <span className="text-lg">{data?.title}</span>
          <div className="flex items-center gap-x-2">
            <button className={`${appStyles.CART_ITEM_BTN} bg-primary`}>
              <FiMinus />
            </button>
            <span className="text-base">{data?.qty}</span>
            <button className={`${appStyles.CART_ITEM_BTN} bg-primary`}>
              <FiPlus />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-end space-y-2">
          <button className={`${appStyles.CART_ITEM_BTN} bg-red`}>
            <FiX size={20} />
          </button>
          <h4 className="text-lg">{`${currency} ${data?.price}`}</h4>
        </div>
      </div>
    </div>
  );
}

// <div className="flex flex-col w-full p-2 space-y-1">
//   <div className="flex justify-between items-center bg-dull">
//     <span className="text-lg">{data?.title}</span>
//     <button className={`${appStyles.CART_ITEM_BTN} self-start bg-red`}>
//       <FiX size={20} />
//     </button>
//   </div>
//   <div className="flex justify-between items-center">
//     <div className="flex items-center gap-x-2">
//       <button className={`${appStyles.CART_ITEM_BTN} bg-primary`}>
//         <FiMinus />
//       </button>
//       <span className="text-base">{data?.qty}</span>
//       <button className={`${appStyles.CART_ITEM_BTN} bg-primary`}>
//         <FiPlus />
//       </button>
//     </div>
//     <h4 className="text-lg">{`${currency} ${data?.price}`}</h4>
//   </div>
// </div>
