"use client";

import DashboardCardWrapper from "@/componets/dashboard/DashboardCardWrapper";
import { MOMENT_DATE_FORMAT2 } from "@/helper/constant";
import { AnimatePresence, motion } from "framer-motion";
import { handleDateTimeFormat } from "@/helper/util";
import { IoIosArrowDown } from "react-icons/io";
import { appStyles } from "@/theme/appStyles";
import { BiCalendar } from "react-icons/bi";
import Calendar from "react-calendar";
import { useState } from "react";

type PropsType = {};
type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function DashboardPage(props: PropsType) {
  const {} = props;

  const [value, setValue] = useState<Value | any>(new Date());
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  return (
    <div className="h-full overflow-auto">
      <div className="flex md:items-center md:justify-between max-md:flex-col pr-4 pl-2 py-4">
        <h2 className={appStyles.PAGE_TITLE}>Overall Statistics</h2>
        <div className="relative max-md:self-end">
          <button
            onClick={() => setShowCalendar((prev) => !prev)}
            className="bg-pure shadow rounded-md flex items-center gap-x-4 py-1.5 px-3"
          >
            <BiCalendar className="text-xl max-sm:text-base" />
            {`
            ${handleDateTimeFormat(value[0], MOMENT_DATE_FORMAT2)}
            -
            ${handleDateTimeFormat(value[1], MOMENT_DATE_FORMAT2)}
            `}
            <IoIosArrowDown className="text-xl max-sm:text-base" />
          </button>
          <AnimatePresence>
            {showCalendar && (
              <motion.div
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                className="absolute top-full right-0 shadow-md rounded-md mt-3"
              >
                <Calendar
                  selectRange
                  value={value}
                  onChange={setValue}
                  className="bg-red border-4 border-red"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <DashboardCardWrapper />
    </div>
  );
}
