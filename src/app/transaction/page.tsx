"use client";

import SearchBarWithTitle from "@/componets/common/SearchBarWithTitle";
import TransactionList from "@/componets/transaction/TransactionList";
import OrderSidebar from "@/componets/transaction/OrderSidebar";
import { OrderType, SearchFilterType } from "@/helper/types";
import { useState } from "react";

export default function TransactionPage() {
  const [searchVal, setSearchVal] = useState<string>("");
  const [showOrderSidebar, setShowOrderSidebar] = useState<boolean>(false);
  const [selectedOrderItem, setSelectedOrderItem] = useState<OrderType | any>(
    {}
  );

  const handleSearch = (value: string, filter: SearchFilterType) => {
    setSearchVal(value);
    console.log({ filter });
  };

  const handleGetOrderData = (obj: OrderType) => {
    setShowOrderSidebar(true);
    setSelectedOrderItem(obj);
  };

  return (
    <div className="h-full overflow-hidden">
      <SearchBarWithTitle
        title="Transaction"
        searchVal={searchVal}
        handleSearch={handleSearch}
        placeholder="Search transaction"
      />
      <div className="flex h-[calc(100vh-137px)] max-sm:h-[calc(100vh-121px)]">
        <TransactionList
          showOrderSidebar={showOrderSidebar}
          selectedOrderItem={selectedOrderItem}
          handleGetOrderData={handleGetOrderData}
        />
        <OrderSidebar
          data={selectedOrderItem}
          showOrderSidebar={showOrderSidebar}
          handleClose={() => setShowOrderSidebar(false)}
        />
      </div>
    </div>
  );
}
