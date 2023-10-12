import { NotificationType } from "@/helper/types";
import { BiCalendar, BiCube } from "react-icons/bi";

type PropsType = {
  isActive: boolean;
  data: any;
};

export default function NotificationListItem(props: PropsType) {
  const { data, isActive } = props;

  return (
    <div
      className={`flex items-center justify-between px-3 py-2 max-sm:p-1 border-b border-b-athensGray border-l-4  
    ${isActive ? "border-l-secondary text-txt" : "border-l-pure text-dull"}
    `}
    >
      <div className="flex items-center truncate">
        <i className="w-8 h-8 flex items-center justify-center bg-iron bg-opacity-60 text-primary text-2xl max-sm:text-xl rounded-full p-1">
          <BiCube />
        </i>
        <p className="pl-2 max-sm:text-xs truncate w-full">{data?.title}</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-dull max-sm:text-sm">{data.id}</p>
        <BiCalendar className="text-2xl max-sm:text-xl text-dull" />
      </div>
    </div>
  );
}
