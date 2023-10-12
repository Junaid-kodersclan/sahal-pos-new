"use client";

import AddCustomerSidebar from "@/componets/customer/AddCustomerSidebar";
import OrderItemListCard from "@/componets/payment/OrderItemListCard";
import OrderSummaryCard from "@/componets/payment/OrderSummaryCard";
import CustomerCard from "@/componets/payment/CustomerCard";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import PaymentCard from "@/componets/payment/PaymentCard";
import NoteCard from "@/componets/payment/NoteCard";
import Button from "@/componets/common/Button";
import { appStyles } from "@/theme/appStyles";
import { useRouter } from "next/navigation";
import { routes } from "@/helper/routes";
import { useState } from "react";
import _ from "lodash";

type ErrorsType = {
  amount: string;
  discount: string;
};

export default function PaymentPage() {
  // hooks and variables
  const router = useRouter();

  //   usestate
  const [noteVal, setNoteVal] = useState<string>("");
  const [showSidebar, setShowSidebar] = useState("");
  const [receivedAmount, setReceivedAmount] = useState<number>(0);
  const [errors, setErrors] = useState<ErrorsType>({
    discount: "",
    amount: "",
  });

  const handleGoBack = () => {
    router.push(routes.sell);
  };

  // handle add discount coupon
  const handleAddDiscount = (value: string) => {
    if (!value) {
      return setErrors({ ...errors, discount: "Coupon is required" });
    }

    if (value !== "pk123456") {
      return setErrors({ ...errors, discount: "invalid coupon" });
    }

    setErrors({ ...errors, discount: "" });

    console.log({ discountVal: value });
  };

  // handle pay bill
  const handlePayBill = () => {
    if (!receivedAmount) {
      return setErrors({ ...errors, amount: "Payment is required" });
    }

    if (receivedAmount >= 2000) {
      setErrors({ ...errors, amount: "" });
    } else {
      return setErrors({ ...errors, amount: "invalid payment" });
    }

    console.log({ receivedAmount, noteVal });
  };

  return (
    <>
      <div className="bg-light h-full">
        <div className="flex items-center px-7 py-4 max-sm:px-4 max-sm:py-2">
          <button
            onClick={handleGoBack}
            className="text-2xl hover:bg-porcelain rounded-md transition-all duration-300 p-1"
          >
            <MdOutlineArrowBackIosNew />
          </button>
          <h2 className={`${appStyles.PAGE_TITLE} max-sm:-ml-4`}>
            Payment Process
          </h2>
        </div>
        <div className="flex max-md:flex-col md:space-x-8 max-md:space-y-8 max-sm:space-y-4 p-8 pt-4 max-sm:px-4 max-md:pb-28">
          <div className="md:w-1/2 space-y-8 max-sm:space-y-4">
            <CustomerCard setShowSidebar={setShowSidebar} />
            <NoteCard noteVal={noteVal} setNoteVal={setNoteVal} />
            <OrderItemListCard />
          </div>
          <div className="md:w-1/2 space-y-8 max-sm:space-y-4">
            <OrderSummaryCard
              discountError={errors.discount}
              handleAddDiscount={handleAddDiscount}
            />
            <PaymentCard
              receivedAmount={receivedAmount}
              amountError={errors.amount}
              setReceivedAmount={setReceivedAmount}
            />
          </div>
        </div>
        <div className="absolute bottom-16 right-8 w-40 h-12">
          <Button title="Done" style="h-full" onClick={handlePayBill} />
        </div>
      </div>
      <AddCustomerSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
      />
    </>
  );
}
