import { FilterStockType } from "@/helper/types";
import { FiCircle } from "react-icons/fi";
import { colors } from "@/theme/colors";

type PropsType = {
  isActive: boolean;
  handleClick: Function;
  data: FilterStockType;
};

export default function FilterStockItem(props: PropsType) {
  const { data, isActive, handleClick } = props;

  return (
    <li>
      <button
        onClick={() => handleClick(data)}
        className={`flex items-center gap-x-2 text-sm font-semibold text-riverBed
        ${isActive ? "text-opacity-100" : "text-opacity-60"}`}
      >
        <FiCircle
          size={20}
          fill={isActive ? colors.primary : colors.pure}
          color={isActive ? colors.primary : colors.shuttleGray}
        />
        {data.title}
      </button>
    </li>
  );
}
