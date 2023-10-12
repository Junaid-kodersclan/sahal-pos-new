import NotificationList from "@/componets/notification/NotificationList";
import { appStyles } from "@/theme/appStyles";

export default function NotificationPage() {
  return (
    <>
      <h2
        className={`${appStyles.PAGE_TITLE} sm:px-7 py-4 sticky top-0 bg-light`}
      >
        Notifications
      </h2>
      <NotificationList />
    </>
  );
}
