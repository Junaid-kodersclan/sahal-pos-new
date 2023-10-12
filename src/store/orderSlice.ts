import { NewSellOrderType } from "@/helper/types";
import { createSlice } from "@reduxjs/toolkit";
import _ from "lodash";

type StateType = {
  orders: any[];
  newSellOrder: NewSellOrderType;
};

let sellOrderInitialState = {
  note: "",
  discount: 0,
  products: [],
  totalPrice: 0,
  customerType: "",
  receiveAmount: "",
  discountCoupon: "",
  paymentMethod: "cash",
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    newSellOrder: sellOrderInitialState,
  },
  reducers: {
    getOrderAction(state, action) {
      state.orders = action.payload;
    },
    selectProductAction(state: StateType, action) {
      let temp = _.cloneDeep(state.newSellOrder);
      temp.products.push(action.payload);
      state.newSellOrder = temp;
    },
  },
});

export const { getOrderAction, selectProductAction } = orderSlice.actions;
export default orderSlice.reducer;
