import { AnimatePresence, motion } from "framer-motion";
import { ReactElement } from "react";

type PropsType = {
  isVisible: boolean;
  children?: ReactElement;
  handleClose: () => void;
};

export default function SidebarContainer(props: PropsType) {
  const { children, handleClose, isVisible } = props;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={handleClose}
          className="flex justify-end absolute top-0 left-0 w-full h-full z-20 bg-txt bg-opacity-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-4/12 h-full max-md:w-6/12 max-sm:w-full bg-pure"
          >
            {children}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
