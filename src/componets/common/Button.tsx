import { colors } from "@/theme/colors";
import Loader from "./Loader";

type PropsType = {
  title: string;
  style?: string;
  disabled?: boolean | undefined;
  onClick?: Function | undefined;
  isloading?: boolean | undefined;
  type?: "button" | "submit" | "reset";
};

export default function Button(props: PropsType) {
  const { type, title, style, onClick, disabled, isloading } = props;

  return (
    <button
      type={type ? type : "submit"}
      onClick={() => onClick && onClick()}
      disabled={disabled}
      className={`w-full flex items-center justify-center transition-all duration-300 rounded-md bg-primary hover:bg-ecstasy text-pure font-semibold py-3 my-4 max-sm:py-1.5 max-md:mt-8
       ${style ? style : ""}
       ${disabled ? "cursor-not-allowed bg-dull" : ""}
      `}
    >
      {isloading ? (
        <Loader
          style={""}
          loading={true}
          loaderSize={18}
          loaderColor={colors.pure}
        />
      ) : (
        title
      )}
    </button>
  );
}
