import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Expense } from "../types/expense.type";

export interface ExpensesState {
  expenses: Expense[];
  filteredExpenses: Expense[];
}

const initialState: ExpensesState = {
  expenses: [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: "2024-07-14",
    },
    { id: "e2", title: "New TV", amount: 799.49, date: "2025-02-12" },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: "2024-02-28",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: "2025-05-12",
    },
  ],
  filteredExpenses:[],
};

export const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    addExpenses: (state, action: PayloadAction<Expense>) => {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    },
    filtereExpenses: (state, action: PayloadAction<string>) => {
       if (action.payload === "all") {
         state.filteredExpenses = [...state.expenses];
       } else {
         state.filteredExpenses = state.expenses.filter((item) =>
           item.date.includes(action.payload)
         );
       }
    },
  },
});

export const { addExpenses,filtereExpenses } = expensesSlice.actions;
export const expensesReducer = expensesSlice.reducer;
