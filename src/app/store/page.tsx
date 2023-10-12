"use client";

import StoreBoxWrapper from "@/componets/store/StoreBoxWrapper";
import { appStyles } from "@/theme/appStyles";
import { useSelector } from "react-redux";

export default function StorePage() {
  // redux store data
  const storeData = useSelector((state: any) => state.store.storeList[0]);
  const category = useSelector((state: any) => state.category.categoryList);
  console.log({ category });

  return (
    <div className="bg-light">
      <h2 className={`${appStyles.PAGE_TITLE} sm:px-7 py-4`}>Store</h2>
      <StoreBoxWrapper />
    </div>
  );
}
