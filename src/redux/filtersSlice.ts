import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  status: string;
}

const initialState: FiltersState = {
  status: "all",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setStatusFilter: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const {setStatusFilter} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
