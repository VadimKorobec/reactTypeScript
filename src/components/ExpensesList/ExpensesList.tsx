import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/state";

import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { useEffect } from "react";
import { filtereExpenses } from "../../redux/expensesSlice";


const ExpensesList = () => {
  const dispatch = useDispatch<AppDispatch>()

  const { filteredExpenses } = useSelector(
    (state: RootState) => state.expenses
  );

  useEffect(() => {
    dispatch(filtereExpenses('all'))
  },[dispatch])

  return (
    <Card>
      <ExpensesFilter />
      <ul style={{ listStyle: "none" }}>
        {filteredExpenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem expense={expense} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ExpensesList;
