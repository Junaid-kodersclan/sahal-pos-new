"use client";

import AddCustomerSidebar from "@/componets/customer/AddCustomerSidebar";
import SearchBarWithTitle from "@/componets/common/SearchBarWithTitle";
import { CustomerType, SearchFilterType } from "@/helper/types";
import CustomerList from "@/componets/customer/CustomerList";
import { appStyles } from "@/theme/appStyles";
import { SIDEBAR } from "@/helper/constant";
import { HiPlus } from "react-icons/hi";
import { useState } from "react";

export default function CustomerPage() {
  const [searchVal, setSearchVal] = useState<string>("");
  const [showSidebar, setShowSidebar] = useState<string>("");
  const [selectedCustomer, setSelectedCustomer] = useState<CustomerType | any>(
    {}
  );

  //  handle search
  const handleSearch = (value: string, filter: SearchFilterType) => {
    setSearchVal(value);
    console.log({ filter });
  };

  // handle show customer details
  const handleShowCustomerDetail = (obj: CustomerType) => {
    setSelectedCustomer(obj);
    setShowSidebar(SIDEBAR.ADD_CUSTOMER);
  };

  // handle show add customer sidebar and unselect customer
  const handleShowAddCustomerSidebar = () => {
    setSelectedCustomer({});
    setShowSidebar(SIDEBAR.ADD_CUSTOMER);
  };

  return (
    <>
      <div className="flex items-center max-md:flex-col">
        <SearchBarWithTitle
          title="Customer"
          searchVal={searchVal}
          handleSearch={handleSearch}
          placeholder="Search customer"
        />
        <button
          type="button"
          onClick={handleShowAddCustomerSidebar}
          className={`${appStyles.SEARCHBAR_BUTTON} flex items-center h-fit mx-4 max-md:self-end`}
        >
          <HiPlus className="text-xl mr-1" />
          Customer
        </button>
      </div>
      <CustomerList handleShowCustomerDetail={handleShowCustomerDetail} />
      <AddCustomerSidebar
        showSidebar={showSidebar}
        setShowSidebar={setShowSidebar}
        selectedCustomer={selectedCustomer}
      />
    </>
  );
}
