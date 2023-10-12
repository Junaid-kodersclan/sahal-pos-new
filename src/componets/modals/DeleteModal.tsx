import { AnimatePresence, motion } from "framer-motion";
import { appStyles } from "@/theme/appStyles";
import Loader from "../common/Loader";
import { colors } from "@/theme/colors";

type PropsType = {
  title: string;
  message: string;
  isVisible: boolean;
  isLoading?: boolean;
  leftBtnTitle: string;
  leftBtnFunction: Function;
  rightBtnTitle?: string | undefined;
  rightBtnFunction?: Function | undefined;
};

export default function DeleteModal(props: PropsType) {
  const {
    title,
    message,
    isVisible,
    isLoading,
    leftBtnTitle,
    rightBtnTitle,
    leftBtnFunction,
    rightBtnFunction,
  } = props;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={appStyles.PARENT_FULL_LOADER}
        >
          <div className="bg-pure border border-iron py-8 px-6 m-12 rounded-xl max-w-md shadow-2xl">
            <h3 className="text-txt text-2xl max-sm:text-xl font-bold">
              {title}
            </h3>
            <p className="text-txt text-lg max-sm:text-base font-medium pt-1 pb-2">
              {message}
            </p>
            <div className="flex items-center justify-center space-x-4 mt-4">
              <button
                onClick={() => leftBtnFunction()}
                className="transition-all duration-300 w-full bg-porcelain rounded-lg py-2 text-xl max-sm:text-base text-txt font-medium"
              >
                {leftBtnTitle}
              </button>
              {rightBtnFunction && (
                <button
                  autoFocus
                  onClick={() => rightBtnFunction()}
                  className="transition-all duration-300 flex justify-center items-center w-full bg-primary hover:bg-ecstasy rounded-lg py-2 text-xl max-sm:text-base text-pure font-medium"
                >
                  {isLoading ? (
                    <Loader
                      style="py-1"
                      loaderWidth={6}
                      loaderSize={20}
                      loading={isLoading}
                      loaderColor={colors.pure}
                    />
                  ) : (
                    rightBtnTitle
                  )}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
