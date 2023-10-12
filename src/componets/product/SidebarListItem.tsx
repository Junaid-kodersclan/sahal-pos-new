import { BrandAndCategoryType } from "@/helper/types";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GiCheckMark } from "react-icons/gi";
import { TfiPencil } from "react-icons/tfi";
import { appStyles } from "@/theme/appStyles";

type PropsType = {
  isActive?: boolean;
  isForSelect?: boolean;
  handleUpdate: Function;
  handleDelete: Function;
  handleOnClick?: Function;
  data: BrandAndCategoryType;
  isForMultipleSelect?: boolean;
};

export default function BrandAndCategoryListItem(props: PropsType) {
  const {
    data,
    isActive,
    isForSelect,
    handleUpdate,
    handleDelete,
    handleOnClick,
    isForMultipleSelect,
  } = props;

  return (
    <div
      onClick={() => handleOnClick && handleOnClick(data)}
      className={`${appStyles.FLEX_BETWEEN} 
      ${handleOnClick ? "cursor-pointer" : ""} 
      ${isActive ? "bg-athensGray" : "bg-pure"}
      border-b border-iron border-opacity-60 p-4`}
    >
      <div className="flex items-center">
        {isForMultipleSelect && (
          <button
            className={`flex items-center justify-center w-6 h-6 mr-3 rounded-md transition-all duration-300
            ${
              isActive
                ? "bg-ecstasy text-pure"
                : "bg-porcelain text-shuttleGray"
            }`}
          >
            <GiCheckMark />
          </button>
        )}
        {isForSelect && (
          <span
            className={`p-1.5 text-sm mr-3 border-2 rounded-full
            ${isActive ? "bg-primary border-primary" : "border-shuttleGray"}`}
          />
        )}
        <p className="text-sm">{data.title}</p>
      </div>
      {!handleOnClick && (
        <div className="flex items-center text-xl space-x-4">
          <button onClick={() => handleUpdate(data)}>
            <TfiPencil />
          </button>
          <button onClick={() => handleDelete(data)}>
            <RiDeleteBin6Line />
          </button>
        </div>
      )}
    </div>
  );
}
