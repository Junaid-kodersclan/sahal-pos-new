import CustomerListItem from "./CustomerListItem";
import { CustomerType } from "@/helper/types";
import { appStyles } from "@/theme/appStyles";
import { useSelector } from "react-redux";
import Loader from "../common/Loader";

type PropsType = { handleShowCustomerDetail: Function };
type CustomerListType = { customer: { customerList: CustomerType[] } };

export default function CustomerList(props: PropsType) {
  const { handleShowCustomerDetail } = props;

  // redux store data
  const customerList = useSelector(
    (state: CustomerListType) => state.customer.customerList
  );

  return (
    <section className="relative md:mt-3 h-[calc(100vh-150px)] max-md:h-[calc(100vh-186px)] max-sm:h-[calc(100vh-157px)]">
      <ul className="w-full h-full overflow-auto px-2">
        <li className="bg-light sticky top-0 flex text-xs text-regentGray border-b border-iron py-4 px-4">
          <span className="basis-4/12 max-sm:basis-6/12">Name</span>
          <span className="basis-8/12 max-sm:basis-6/12 max-sm:hidden">
            Phone number
          </span>
        </li>
        {customerList?.map((item) => {
          return (
            <CustomerListItem
              data={item}
              key={`CUSTOMER_LIST_${item.id}`}
              handleShowCustomerDetail={handleShowCustomerDetail}
            />
          );
        })}
        <Loader loading={false} style={appStyles.LOADER} />
      </ul>
      <Loader
        loading={false}
        loaderSize={60}
        style={appStyles.PARENT_FULL_LOADER}
      />
    </section>
  );
}
