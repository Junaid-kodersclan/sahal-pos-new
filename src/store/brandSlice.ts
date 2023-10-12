import { createSlice } from "@reduxjs/toolkit";
import { CategoryType } from "@/helper/types";
import _ from "lodash";

type StateType = {
  brandList: CategoryType[];
};

const brandSlice = createSlice({
  name: "brand",
  initialState: {
    brandList: [],
  },
  reducers: {
    getBrandAction(state: StateType, action) {
      state.brandList = action.payload;
    },
    addBrandAction(state: StateType, action) {
      let temp: CategoryType[] = _.cloneDeep(state.brandList);
      temp.unshift(action.payload);
      state.brandList = temp;
    },
    updateBrandAction(state: StateType, action) {
      let temp: CategoryType[] = _.cloneDeep(state.brandList);
      let findIndex = _.findIndex(temp, ["id", action.payload.id]);
      temp[findIndex] = action.payload;
      state.brandList = temp;
    },
    deleteBrandAction(state: StateType, action) {
      let temp: CategoryType[] = _.cloneDeep(state.brandList);
      let findIndex = _.findIndex(temp, ["id", action.payload]);
      temp.splice(findIndex, 1);
      state.brandList = temp;
    },
  },
});

export const {
  getBrandAction,
  addBrandAction,
  updateBrandAction,
  deleteBrandAction,
} = brandSlice.actions;
export default brandSlice.reducer;
