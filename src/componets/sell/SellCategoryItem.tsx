import { CategoryType } from "@/helper/types";

type PropsType = {
  isActive: boolean;
  data: CategoryType;
  handleSelectCategory: Function;
};

export default function SellCategoryItem(props: PropsType) {
  const { data, isActive, handleSelectCategory } = props;

  return (
    <button
      onClick={() => handleSelectCategory(data)}
      className={`min-w-fit h-10 m-2 rounded-xl shadow border border-light hover:bg-primary hover:text-pure hover:scale-105 transition-all duration-300 font-bold text-lg capitalize px-6
        ${isActive ? "bg-primary text-pure scale-105" : "bg-pure"}`}
    >
      {data?.title}
    </button>
  );
}
