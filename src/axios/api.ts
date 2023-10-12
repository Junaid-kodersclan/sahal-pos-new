import { handleAlertMessages } from "@/helper/util";
import axios from "./index";

// handle get request
export const getRequest = (
  endpoint: string,
  onSuccessCallback: Function,
  onErrorCallback: Function
) => {
  axios
    .get(endpoint)
    .then((res: any) => onSuccessCallback(res))
    .catch((err: any) => {
      onErrorCallback(err);
      handleAlertMessages(err);
    });
};

// handle post request
export const postRequest = (
  endpoint: string,
  payload: object,
  onSuccessCallback: Function,
  onErrorCallback: Function
) => {
  axios
    .post(endpoint, payload)
    .then((res: any) => onSuccessCallback(res))
    .catch((err: any) => {
      onErrorCallback(err);
      handleAlertMessages(err);
    });
};

// handle update request
export const patchRequest = (
  endpoint: string,
  payload: object,
  onSuccessCallback: Function,
  onErrorCallback: Function
) => {
  axios
    .patch(endpoint, payload)
    .then((res: any) => onSuccessCallback(res))
    .catch((err: any) => {
      onErrorCallback(err);
      handleAlertMessages(err);
    });
};

// handle delete request
export const deleteRequest = (
  endpoint: string,
  onSuccessCallback: Function,
  onErrorCallback: Function
) => {
  axios
    .delete(endpoint)
    .then((res: any) => onSuccessCallback(res))
    .catch((err: any) => {
      onErrorCallback(err);
      handleAlertMessages(err);
    });
};
