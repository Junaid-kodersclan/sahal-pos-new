import { handleCheckStoreExistOrNot } from "@/helper/util";
import { ReactElement } from "react";

type PropsType = {
  title: string;
  icon: ReactElement;
  handleClick: () => void;
};

export default function ProductButton(props: PropsType) {
  const { icon, title, handleClick } = props;

  return (
    <button
      onClick={handleClick}
      disabled={!handleCheckStoreExistOrNot() ? true : false}
      className={`transition-all duration-300 flex items-center mr-4 text-sm hover:bg-porcelain rounded-md px-6 max-md:px-4 max-sm:px-2 py-2
      ${!handleCheckStoreExistOrNot() ? "cursor-not-allowed" : ""}`}
    >
      <span className="text-lg mr-1">{icon}</span> {title}
    </button>
  );
}
