import { colors } from "@/theme/colors";
import { Oval } from "react-loader-spinner";

type PropsType = {
  style?: string;
  loading?: boolean;
  loaderSize?: number;
  loaderColor?: string;
  loaderWidth?: number;
};

export default function Loader(props: PropsType) {
  const { style, loading, loaderColor, loaderSize, loaderWidth } = props;

  return (
    <>
      {loading && (
        <div className={style ? style : ""}>
          <Oval
            visible={true}
            wrapperClass=""
            wrapperStyle={{}}
            ariaLabel="oval-loading"
            width={loaderSize ? loaderSize : 24}
            height={loaderSize ? loaderSize : 24}
            strokeWidth={loaderWidth ? loaderWidth : 5}
            color={loaderColor ? loaderColor : colors.primary}
            strokeWidthSecondary={loaderWidth ? loaderWidth : 5}
            secondaryColor={loaderColor ? loaderColor : colors.primary}
          />
        </div>
      )}
    </>
  );
}
