import NotificationListItem from "./NotificationListItem";
import { NOTIFICATION_LIST } from "@/helper/data";

const newList = [1, 2, 3, 4, 5];

export default function NotificationList() {
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
