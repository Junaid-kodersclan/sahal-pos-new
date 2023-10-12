import { MdOutlineArrowForwardIos } from "react-icons/md";

type PropsType = {
  title: string;
  isActive: boolean;
  handleOnClick: () => void;
};

export default function ProfilePageButton(props: PropsType) {
  const { title, isActive, handleOnClick } = props;

  return (
    <button
      type="button"
      onClick={handleOnClick}
      className={`hover:bg-primary hover:text-pure border-b border-iron border-opacity-60 transition-all duration-300 rounded-lg max-sm:text-sm w-full flex items-center justify-between pl-6 pr-3 py-3 ${
        isActive ? "bg-primary text-pure" : "bg-pure text-riverBed"
      }`}
    >
      {title} <MdOutlineArrowForwardIos className="text-2xl max-sm:text-xl" />
    </button>
  );
}
