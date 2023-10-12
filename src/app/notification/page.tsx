import NotificationList from "@/componets/notification/NotificationList";
import NotificationListItem from "@/componets/notification/NotificationListItem";
import { appStyles } from "@/theme/appStyles";

const getPosts = async (): Promise<any[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await data.json();

  return posts;
};

export default async function NotificationPage() {
  const posts = await getPosts();
  console.log(posts);

  return (
    <>
      <h2
        className={`${appStyles.PAGE_TITLE} sm:px-7 py-4 sticky top-0 bg-light`}
      >
        Notifications
      </h2>
      {posts?.map((item) => {
        return (
          <NotificationListItem
            data={item}
            isActive={false}
            key={`NOTIFICATION_LIST_${item.id}`}
          />
        );
      })}
      {/* <NotificationList /> */}
    </>
  );
}
