import { AnimatePresence, motion } from "framer-motion";
import { FormikErrorType } from "@/helper/types";
import _ from "lodash";

type PropsType = {
  error: FormikErrorType;
};

export default function ErrorField(props: PropsType) {
  const { error } = props;

  return (
    <AnimatePresence>
      {error && (
        <motion.p
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="text-red text-[13px] font-medium absolute top-full left-3 mt-0.5"
        >
          {_.isString(error) && error}
        </motion.p>
      )}
    </AnimatePresence>
  );
}
