import { createSlice } from "@reduxjs/toolkit";
import { CategoryType } from "@/helper/types";
import _ from "lodash";

type StateType = {
  categoryList: CategoryType[];
};

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categoryList: [],
  },
  reducers: {
    getCategoryAction(state: StateType, action) {
      state.categoryList = action.payload;
    },
    addCategoryAction(state: StateType, action) {
      let temp: CategoryType[] = _.cloneDeep(state.categoryList);
      temp.unshift(action.payload);
      state.categoryList = temp;
    },
    updateCategoryAction(state: StateType, action) {
      let temp: CategoryType[] = _.cloneDeep(state.categoryList);
      let findIndex = _.findIndex(temp, ["id", action.payload.id]);
      temp[findIndex] = action.payload;
      state.categoryList = temp;
    },
    deleteCategoryAction(state: StateType, action) {
      let temp: CategoryType[] = _.cloneDeep(state.categoryList);
      let findIndex = _.findIndex(temp, ["id", action.payload]);
      temp.splice(findIndex, 1);
      state.categoryList = temp;
    },
  },
});

export const {
  getCategoryAction,
  addCategoryAction,
  updateCategoryAction,
  deleteCategoryAction,
} = categorySlice.actions;
export default categorySlice.reducer;
