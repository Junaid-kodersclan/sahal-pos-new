import { BsCash, BsRecordCircle } from "react-icons/bs";
import { appStyles } from "@/theme/appStyles";
import { colors } from "@/theme/colors";
import ErrorField from "../common/ErrorField";

const currency = "PKR";
const totalPrice = 2000;

type PropsType = {
  amountError: string;
  receivedAmount: number;
  setReceivedAmount: Function;
};

export default function PaymentCard(props: PropsType) {
  const { receivedAmount, amountError, setReceivedAmount } = props;

  return (
    <div className={appStyles.PAYMENT_BOX}>
      <h6 className="font-medium">Select the payment method</h6>
      <button className="flex items-center my-4">
        <BsRecordCircle size={20} color={true ? colors.primary : colors.dull} />
        <BsCash className="text-2xl ml-4 mr-2" />
        Cash
      </button>
      <div className="relative">
        <input
          type="number"
          value={receivedAmount > 0 ? receivedAmount : ""}
          className={appStyles.INPUT}
          placeholder="Amount received Rs 00:00"
          onChange={(e) => setReceivedAmount(e.target.value)}
        />
        <ErrorField error={amountError} />
      </div>
      <div className="flex items-center justify-between border-t border-iron text-lg font-semibold pt-4 mt-8">
        <div className="space-y-2">
          <p>Total Bill</p>
          <p>Total Received</p>
          <p>Change Due</p>
        </div>
        <div className="space-y-2">
          <p>{`${currency} ${totalPrice}`}</p>
          <p>{`${currency} ${receivedAmount ? receivedAmount : 0}`}</p>
          <p>{`${currency} ${
            (receivedAmount ? receivedAmount : 0) - totalPrice
          }`}</p>
        </div>
      </div>
    </div>
  );
}
