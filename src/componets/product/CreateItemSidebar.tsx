import { IoIosArrowBack } from "react-icons/io";
import { CategoryType } from "@/helper/types";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import _ from "lodash";

type PropsType = {
  title: string;
  placeholder: string;
  handleClose: Function;
  handleGoBack: Function;
  selectedItem: CategoryType;
  handleButtonClick: Function;
};

export default function CreateItemSidebar(props: PropsType) {
  const {
    title,
    placeholder,
    handleClose,
    selectedItem,
    handleGoBack,
    handleButtonClick,
  } = props;

  const [value, setValue] = useState<string>(
    !_.isEmpty(selectedItem) ? selectedItem.title : ""
  );

  return (
    <>
      <div className="sticky top-0 bg-pure flex items-center justify-between max-sm:p-2 p-4">
        <div className="flex items-center space-x-3">
          <button onClick={() => handleGoBack()}>
            <IoIosArrowBack className="text-3xl max-sm:text-2xl" />
          </button>
          <h2>{title}</h2>
        </div>
        <button onClick={() => handleClose()}>
          <RxCross2 className="text-3xl max-sm:text-2xl" />
        </button>
      </div>
      <div className="px-4 pt-6 pb-3 border-y border-iron border-opacity-60">
        <input
          autoFocus
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={(e) => setValue(e.target.value)}
          className="outline-none w-full py-2 text-txt border-2 border-opacity-60 border-iron focus-within:border-primary rounded-lg transition-all duration-300 px-4"
        />
        <p className="text-xs text-txt text-opacity-70 leading-none pl-8 pt-1">
          Max. 20 characters
        </p>
      </div>
      <div className="flex justify-end p-4">
        <button
          type="button"
          onClick={() => handleButtonClick(value)}
          className="bg-primary hover:bg-ecstasy text-pure transition-all duration-300 font-medium rounded-md px-12 py-2"
        >
          Save
        </button>
      </div>
    </>
  );
}
