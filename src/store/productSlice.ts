import { createSlice } from "@reduxjs/toolkit";
import { ProductType } from "@/helper/types";
import _ from "lodash";

type StateType = {
  productList: ProductType[];
};

const productSlice = createSlice({
  name: "product",
  initialState: {
    productList: [],
  },
  reducers: {
    getProductAction(state: StateType, action) {
      state.productList = action.payload;
    },
    addProductAction(state: StateType, action) {
      let temp = _.cloneDeep(state.productList);
      temp.unshift(action.payload);
      state.productList = temp;
    },
    updateProductAction(state: StateType, action) {
      let temp = _.cloneDeep(state.productList);
      let findIndex = _.findIndex(temp, ["id", action.payload.id]);
      temp[findIndex] = action.payload;
      state.productList = temp;
    },
    deleteProductAction(state: StateType, action) {
      let temp = _.cloneDeep(state.productList);
      let findIndex = _.findIndex(temp, ["id", action.payload]);
      temp.splice(findIndex, 1);
      state.productList = temp;
    },
  },
});

export const {
  addProductAction,
  getProductAction,
  updateProductAction,
  deleteProductAction,
} = productSlice.actions;
export default productSlice.reducer;
