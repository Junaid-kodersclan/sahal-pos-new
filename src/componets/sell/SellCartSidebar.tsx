import { NewSellOrderType } from "@/helper/types";
import { PRODUCT_LIST } from "@/helper/data";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import SellCartItem from "./SellCartItem";
import { RxCross2 } from "react-icons/rx";
import { routes } from "@/helper/routes";
import { motion } from "framer-motion";
import Button from "../common/Button";
import _ from "lodash";

type PropsType = { handleClose: () => void };
type CartDataType = { order: { newSellOrder: NewSellOrderType } };
type StoreDataType = { store: { storeList: { currency: string }[] } };

export default function SellCartSidebar(props: PropsType) {
  const { handleClose } = props;

  // hooks and variables
  const router = useRouter();

  // redux store data
  const storeData = useSelector(
    (state: StoreDataType) => state.store.storeList[0]
  );
  const cartData = useSelector(
    (state: CartDataType) => state.order.newSellOrder
  );

  const handlePayBill = () => {
    router.push(routes.payment);
  };

  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="w-4/12 max-xl:w-5/12 h-full overflow-auto bg-light border-iron md:border-l border-opacity-60 z-10 max-md:absolute max-md:top-0 max-md:right-0 max-md:w-full max-md:h-full max-md:px-10 max-sm:px-0"
    >
      <div className="flex items-center justify-between bg-light sticky top-0 max-sm:px-4 max-md:pt-12 max-sm:pt-0">
        <h3 className="font-bold text-xl p-2">Bills</h3>
        <button
          onClick={handleClose}
          className="text-2xl hover:bg-porcelain rounded-full transition-all duration-300 p-1 md:hidden"
        >
          <RxCross2 />
        </button>
      </div>
      <div className="h-full px-4">
        {cartData?.products?.map((item) => {
          return <SellCartItem data={item} key={`Cart_Item_${item.id}`} />;
        })}
      </div>
      <div className="flex flex-col sticky bottom-0 bg-light pt-2 px-2 -mb-2">
        <div className="flex items-center justify-between text-xl font-bold py-3 -mb-2">
          <h4>Total</h4>
          <h4>{`${
            !_.isEmpty(storeData)
              ? _.isObject(storeData?.currency)
                ? // @ts-ignore
                  storeData?.currency.value
                : storeData?.currency
              : ""
          } ${cartData.totalPrice}`}</h4>
        </div>
        <div className="max-md:-mt-8">
          <Button
            title="Pay"
            type="button"
            disabled={false}
            onClick={handlePayBill}
          />
        </div>
      </div>
    </motion.div>
  );
}
