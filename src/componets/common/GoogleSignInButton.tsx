import { colors } from "@/theme/colors";
import { FcGoogle } from "react-icons/fc";
import { Oval } from "react-loader-spinner";

type PropsType = {
  isloading?: boolean;
  loaderColor?: string;
};

export default function GoogleSignInButton(props: PropsType) {
  const { isloading, loaderColor } = props;

  return (
    <>
      <div className="border-t border-iron relative my-10">
        <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full">
          <span className="text-extraLight bg-pure px-4">Or</span>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="min-w-[280px] min-h-[45px] border-iron border rounded-md flex items-center justify-center gap-x-2 py-1"
        >
          {isloading ? (
            <Oval
              height={25}
              width={25}
              visible={true}
              wrapperClass=""
              strokeWidth={6}
              wrapperStyle={{}}
              ariaLabel="oval-loading"
              strokeWidthSecondary={6}
              color={loaderColor ? loaderColor : colors.primary}
              secondaryColor={loaderColor ? loaderColor : colors.primary}
            />
          ) : (
            <>
              <FcGoogle size={35} />
              <span className="text-txt font-bold">Sign in with Google</span>
            </>
          )}
        </button>
      </div>
    </>
  );
}
