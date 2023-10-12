import "react-toastify/dist/ReactToastify.css"; // react-toastify-alerts css file
import "react-phone-input-2/lib/style.css"; // react-phone-input-2 css file
import "react-calendar/dist/Calendar.css"; // react-calendar css file
import { ToastContainer } from "react-toastify";
// import { usePathname } from "next/navigation";
import NavSidebar from "../common/NavSidebar";
// import { routes } from "@/helper/routes";
import Header from "../common/Header";
import { ReactNode } from "react";

type PropsType = { children: ReactNode };

export default function Layout(props: PropsType) {
  const { children } = props;

  // const pathname = usePathname();

  // const isAuthPages = [
  //   routes.signin,
  //   routes.signup,
  //   routes.verifyOtp,
  //   routes.forgetPassword,
  //   routes.createPassword,
  // ].includes(pathname);

  return (
    <main className="fixed top-0 left-0 h-full w-full">
      <ToastContainer
        hideProgressBar={false}
        position="top-right"
        pauseOnFocusLoss
        autoClose={3000}
        closeOnClick
        pauseOnHover
        theme="dark"
        newestOnTop
        rtl={false}
        draggable
      />
      {false ? (
        children
      ) : (
        <>
          <Header />
          <div className="flex">
            <NavSidebar />
            <main className="bg-light text-txt w-full overflow-y-auto overflow-x-hidden h-[calc(100vh-65px)] max-sm:h-[calc(100vh-41px)]">
              {children}
            </main>
          </div>
        </>
      )}
    </main>
  );
}
