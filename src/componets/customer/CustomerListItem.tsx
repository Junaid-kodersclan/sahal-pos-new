import { MdPhoneInTalk } from "react-icons/md";
import { CustomerType } from "@/helper/types";
import { FiEye } from "react-icons/fi";

type PropsType = {
  data: CustomerType;
  handleShowCustomerDetail: Function;
};

export default function CustomerListItem(props: PropsType) {
  const { data, handleShowCustomerDetail } = props;

  return (
    <li
      onClick={() => handleShowCustomerDetail(data)}
      className="flex items-center text-brightGray cursor-pointer border-b-2 border-iron border-opacity-30 p-4"
    >
      <div className="flex items-center basis-4/12 max-sm:basis-6/12 min-w-fit">
        <span className="bg-riverBed text-pure w-12 h-12 max-sm:w-9 max-sm:h-9 max-sm:text-sm uppercase rounded-full flex items-center justify-center">
          {data?.name.slice(0, 2)}
        </span>
        <p className="pl-2 text-sm font-medium capitalize">{data?.name}</p>
      </div>
      <div className="flex items-center sm:justify-between max-sm:justify-end basis-8/12 max-sm:basis-6/12">
        <a
          target="_blanck"
          href="https://api.whatsapp.com"
          className="flex items-center text-xs font-medium text-primary w-fit max-sm:hidden"
        >
          <MdPhoneInTalk className="text-base mr-1" />
          {data?.phone}
        </a>
        <button className="bg-pure p-2 sm:mr-8 rounded-md hover:bg-porcelain transition-all duration-300">
          <FiEye size={20} />
        </button>
      </div>
    </li>
  );
}
