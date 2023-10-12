import { BsRecordCircle } from "react-icons/bs";
import { SIDEBAR } from "@/helper/constant";
import { appStyles } from "@/theme/appStyles";
import { FiPlus } from "react-icons/fi";
import { colors } from "@/theme/colors";

type PropsType = {
  setShowSidebar: Function;
};

export default function CustomerCard(props: PropsType) {
  const { setShowSidebar } = props;
  return (
    <div className={appStyles.PAYMENT_BOX}>
      <div className={appStyles.FLEX_BETWEEN}>
        <h6 className="font-medium">Customer</h6>
        <button
          onClick={() => setShowSidebar(SIDEBAR.ADD_CUSTOMER)}
          className="transition-all duration-300 flex items-center justify-center bg-primary hover:bg-ecstasy text-pure text-2xl p-1 rounded-md"
        >
          <FiPlus />
        </button>
      </div>
      <button className="w-full flex items-center gap-x-4 mt-4">
        <BsRecordCircle size={20} color={true ? colors.primary : colors.dull} />
        Walk in customer
      </button>
    </div>
  );
}
