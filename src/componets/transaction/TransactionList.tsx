import TransactionItem from "./TransactionItem";
import { TRANSACTION_LIST } from "@/helper/data";
import { OrderType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import Loader from "../common/Loader";

type PropsType = {
  showOrderSidebar: boolean;
  selectedOrderItem: OrderType;
  handleGetOrderData: Function;
};

export default function TransactionList(props: PropsType) {
  const { selectedOrderItem, showOrderSidebar, handleGetOrderData } = props;

  return (
    <div
      className={`h-full transition-all duration-700 relative
      ${showOrderSidebar ? "md:w-3/5 w-full" : "w-full"}`}
    >
      <div className="h-full overflow-auto px-1">
        {TRANSACTION_LIST.map((item) => {
          let isActive = selectedOrderItem.id == item.id;
          return (
            <TransactionItem
              data={item}
              isActive={isActive}
              key={`TransactionItem__${item.id}`}
              handleGetOrderData={handleGetOrderData}
            />
          );
        })}
        <Loader loading={false} style={appStyles.LOADER} />
      </div>
      <Loader
        loading={false}
        loaderSize={40}
        style={appStyles.PARENT_FULL_LOADER}
      />
    </div>
  );
}
