"use client";

import { useSelector } from "react-redux";
import NotificationListItem from "./NotificationListItem";
import { NOTIFICATION_LIST } from "@/helper/data";

const newList = [1, 2, 3, 4, 5];

export default function NotificationList() {
  // redux store data
  const storeData = useSelector((state: any) => state.store.storeList[0]);
  // console.log({ storeData });
  const category = useSelector((state: any) => state.category.categoryList);
  console.log({ category });

  return (
    <>
      {NOTIFICATION_LIST.map((item) => {
        let isActive = newList.some((newItem) => newItem === item.id);
        return (
          <NotificationListItem
            data={item}
            isActive={isActive}
            key={`NOTIFICATION_LIST_${item.id}`}
          />
        );
      })}
    </>
  );
}
