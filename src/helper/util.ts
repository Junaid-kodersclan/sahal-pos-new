import { ToastOptions, toast } from "react-toastify";
import store from "@/store/store";
import moment from "moment";
import _ from "lodash";

type AlertMessageType = {
  response: { data: { message: string[] | string } };
};

const toastifyProperties: ToastOptions<{}> = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
};

// error alert toastify
export const errorToast = (err: string) => {
  return toast.error(err, toastifyProperties);
};

// message alert toastify
export const messageToast = (err: string) => {
  return toast.info(err, toastifyProperties);
};

// success alert toastify
export const successToast = (message: string) => {
  return toast.success(message, toastifyProperties);
};

// handle show alert
export const handleAlertMessages = (err: AlertMessageType) => {
  if (true) console.log(err);

  if (_.isArray(err?.response?.data?.message))
    return errorToast(err.response.data.message[0]);

  if (_.isString(err?.response?.data?.message))
    return errorToast(err.response.data.message);
};

// handle check store exist in reduser
export const handleCheckStoreExistOrNot = () => {
  if (_.isEmpty(store.getState()?.store?.storeList[0])) return false;
  return true;
};

// handle format date time
export const handleDateTimeFormat = (dateTime: string, format: string) => {
  return moment(dateTime).format(format);
};

// handle return specific key's values array
export const handleArray = (arr: any[], key: string) => {
  let temp: any = [];
  arr.map((item) => temp.push(item[key]));
  return temp;
};
