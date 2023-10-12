import { ORDER_SIDEBAR_DATA } from "@/helper/data";
import OrderSidebarItem from "./OrderSidebarItem";
import { OrderType } from "@/helper/types";
import { RxCross2 } from "react-icons/rx";
import { appStyles } from "@/theme/appStyles";
import Loader from "../common/Loader";

const currency = "PKR";

type PropsType = {
  data: OrderType;
  handleClose: () => void;
  showOrderSidebar: boolean;
};

export default function OrderSidebar(props: PropsType) {
  const { data, showOrderSidebar, handleClose } = props;

  return (
    <div
      className={`h-full relative max-md:border-none border-iron border-opacity-60 bg-light transition-all duration-700 max-md:absolute max-md:top-0 max-md:right-0 max-md:h-full max-md:flex max-md:items-center max-md:justify-center max-md:z-10
    ${
      showOrderSidebar
        ? "md:w-2/5 opacity-100 max-md:w-full border-l"
        : "w-0 opacity-0 border-none"
    }
    `}
    >
      <div className="h-full w-full overflow-y-auto">
        <div className="sm:sticky top-0 bg-light z-10 border-b border-iron border-opacity-60">
          <div className={`${appStyles.FLEX_BETWEEN} p-2`}>
            <h4 className="text-lg font-semibold">Order #{data.id}</h4>
            <button
              onClick={handleClose}
              className="text-2xl max-md:text-4xl text-txt"
            >
              <RxCross2 />
            </button>
          </div>
        </div>
        <OrderDetails data={data} />
        <div className={`${appStyles.FLEX_BETWEEN} font-semibold p-2`}>
          <span>Items</span>
          <span>Qty</span>
        </div>
        <>
          {ORDER_SIDEBAR_DATA.map((item, index) => {
            return (
              <OrderSidebarItem
                data={item}
                key={`ORDER_SIDEBAR_DATA_${item.createdAt}__${index}`}
              />
            );
          })}
          <Loader loading={false} style={appStyles.LOADER} />
        </>
      </div>
      <Loader
        loading={false}
        loaderSize={40}
        style={appStyles.PARENT_FULL_LOADER}
      />
    </div>
  );
}

//\\ order detail component //\\
const OrderDetails = ({ data }: { data: OrderType }) => {
  return (
    <div>
      <div className="xl:flex xl:items-center max-xl:grid max-xl:grid-cols-2 max-md:grid-cols-4 max-sm:grid-cols-2">
        <div className={appStyles.ORDER_DETAIL}>
          <span>Customer</span>
          <span className={appStyles.ORDER_DETAIL_ITEM}>
            {data.customerId ? data.customerId : "walkin customer"}
          </span>
        </div>
        <div className={appStyles.ORDER_DETAIL}>
          <span>Payment</span>
          <span className={appStyles.ORDER_DETAIL_ITEM}>
            {data.paymentMethod ? data.paymentMethod : "cash"}
          </span>
        </div>
        <div className={appStyles.ORDER_DETAIL}>
          <span>Discount</span>
          <span className={appStyles.ORDER_DETAIL_ITEM}>
            {data.discount ? data.discount : 0}
          </span>
        </div>
        <div className={appStyles.ORDER_DETAIL}>
          <span>Total Bill</span>
          <span className={appStyles.ORDER_DETAIL_ITEM}>
            {`${currency} ${data.totalPrice ? data.totalPrice : 0}`}
          </span>
        </div>
      </div>
      {data.note && (
        <p className="text-dull text-sm p-2 border-b border-iron border-opacity-60">
          <span className="text-txt font-semibold pr-2">Note:</span>
          {data.note}
        </p>
      )}
    </div>
  );
};

// //\\ order detail component //\\
// const OrderDetails = ({ data }: { data: OrderType }) => {
//   return (
//     <div className="border-y border-iron border-opacity-60">
//       <div className="xl:flex xl:items-center max-xl:grid max-xl:grid-cols-2 max-md:grid-cols-4 max-sm:grid-cols-2 max-xl:gap-2">
//         <div
//           className={`${appStyles.ORDER_DETAIL} border border-iron border-opacity-60 py-3 px-2`}
//         >
//           <span>Customer</span>
//           <span className={appStyles.ORDER_DETAIL_ITEM}>
//             {data.customerId ? data.customerId : "walkin customer"}
//           </span>
//         </div>
//         <div
//           className={`${appStyles.ORDER_DETAIL} border border-iron border-opacity-60 py-3 px-2`}
//         >
//           <span>Payment Method</span>
//           <span className={appStyles.ORDER_DETAIL_ITEM}>
//             {data.paymentMethod ? data.paymentMethod : "cash"}
//           </span>
//         </div>
//         <div
//           className={`${appStyles.ORDER_DETAIL} border border-iron border-opacity-60 py-3 px-2`}
//         >
//           <span>Discount</span>
//           <span className={appStyles.ORDER_DETAIL_ITEM}>
//             {data.discount ? data.discount : 0}
//           </span>
//         </div>
//         <div
//           className={`${appStyles.ORDER_DETAIL} border border-iron border-opacity-60 py-3 px-2`}
//         >
//           <span>Total Bill</span>
//           <span className={appStyles.ORDER_DETAIL_ITEM}>
//             {`${currency} ${data.totalPrice ? data.totalPrice : 0}`}
//           </span>
//         </div>
//       </div>
//       {data.note && (
//         <p className="text-dull text-sm mt-2 px-2">
//           <span className="text-txt font-semibold pr-2">Note:</span>
//           {data.note}
//         </p>
//       )}
//     </div>
//   );
// };
