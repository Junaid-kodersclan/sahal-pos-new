import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { RxCross2, RxPlus } from "react-icons/rx";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

type PropsType = {
  title: string;
  placeholder: string;
  handleAdd: () => void;
  isForSelect?: boolean;
  handleSearch: Function;
  handleClose: () => void;
  handleGoBack?: Function;
};

export default function SidebarHeader(props: PropsType) {
  const {
    title,
    handleAdd,
    placeholder,
    isForSelect,
    handleClose,
    handleGoBack,
    handleSearch,
  } = props;

  const [searchVal, setSearchVal] = useState<string>("");

  const handleSearchVal = (val: string) => {
    setSearchVal(val);
    handleSearch(val);
  };

  return (
    <>
      <div className="sticky top-0 bg-pure flex items-center justify-between border-b border-iron border-opacity-60 max-sm:p-2 p-4 mb-4">
        <div className="flex items-center space-x-3">
          {isForSelect && (
            <button onClick={() => handleGoBack && handleGoBack()}>
              <IoIosArrowBack className="text-3xl max-sm:text-2xl" />
            </button>
          )}
          <h2>{title}</h2>
        </div>
        {!isForSelect && (
          <div className="flex items-center">
            <button onClick={handleAdd}>
              <RxPlus className="text-secondary max-sm:text-2xl text-3xl mr-4" />
            </button>
            <button onClick={handleClose}>
              <RxCross2 className="text-3xl max-sm:text-2xl" />
            </button>
          </div>
        )}
      </div>
      <div className="flex items-center gap-x-2 border-2 border-opacity-60 border-iron focus-within:border-primary text-dull rounded-lg transition-all duration-300 mx-4 px-2 py-1">
        <HiOutlineMagnifyingGlass size={24} />
        <input
          type="text"
          value={searchVal}
          placeholder={placeholder}
          onChange={(e) => handleSearchVal(e.target.value)}
          className="outline-none border-none w-full py-1 text-txt"
        />
        <button
          disabled={!searchVal}
          onClick={() => setSearchVal("")}
          className={`text-2xl transition-opacity duration-300 ${
            searchVal ? "cursor-pointer" : "opacity-0"
          }`}
        >
          <RxCross2 />
        </button>
      </div>
    </>
  );
}
