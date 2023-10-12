import { createSlice } from "@reduxjs/toolkit";
import { CustomerType } from "@/helper/types";
import _ from "lodash";

type StateType = {
  customerList: CustomerType[];
};

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    customerList: [],
  },
  reducers: {
    getCustomerAction(state: StateType, action) {
      state.customerList = action.payload;
    },
    addCustomerAction(state: StateType, action) {
      let temp = _.cloneDeep(state.customerList);
      temp.unshift(action.payload);
      state.customerList = temp;
    },
  },
});

export const { getCustomerAction, addCustomerAction } = customerSlice.actions;
export default customerSlice.reducer;
