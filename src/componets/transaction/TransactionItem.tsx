import { MOMENT_DATE_TIME_FORMAT } from "@/helper/constant";
import { handleDateTimeFormat } from "@/helper/util";
import { OrderType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";

const currency = "PKR";

type PropsType = {
  data: OrderType;
  isActive: boolean;
  handleGetOrderData: Function;
};

export default function TransactionItem(props: PropsType) {
  const { data, isActive, handleGetOrderData } = props;
  const { id, status, createdAt, totalPrice, productsCount } = data;

  return (
    <div
      id={`div${data.id}`}
      onClick={() => handleGetOrderData(data)}
      className={`hover:bg-primary hover:text-light border-b border-iron border-opacity-40 cursor-pointer transition-all duration-300 p-2 py-4 max-sm:py-2.5 space-y-2 max-sm:space-y-1.5
      ${isActive ? "bg-primary text-light" : "bg-light text-txt"}
      `}
    >
      <div className={appStyles.FLEX_BETWEEN}>
        <h6 className="font-semibold max-sm:text-sm">Order #{id}</h6>
        <p className="text-xs">
          {handleDateTimeFormat(createdAt, MOMENT_DATE_TIME_FORMAT)}
        </p>
      </div>
      <div className={appStyles.FLEX_BETWEEN}>
        <h6 className="font-medium max-sm:text-sm">Items {productsCount}</h6>
        <div className="flex items-center">
          <h3 className="pr-4 font-semibold max-sm:text-sm">
            {`${currency} ${totalPrice}`}
          </h3>
          <span className="bg-secondary text-pure px-2 rounded-2xl max-sm:text-xs font-medium">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
}
