import { useSelector } from "react-redux";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { RootState } from "../../redux/state";
import { Expense } from "../../types/expense.type";

import styles from "./ExpensesList.module.css";

const getVisibleExpenses = (expenses: Expense[], status: string) => {
  switch (status) {
    case "2024":
      return expenses.filter((item) => item.date.includes(status));
    case "2025":
      return expenses.filter((item) => item.date.includes(status));
    case "2026":
      return expenses.filter((item) => item.date.includes(status));
    case "2027":
      return expenses.filter((item) => item.date.includes(status));
    default:
      return expenses;
  }
};

const ExpensesList = () => {
  const { expenses } = useSelector((state: RootState) => state.expenses);
  const { status } = useSelector((state: RootState) => state.filters);
  const visibleExpenses = getVisibleExpenses(expenses, status);

  return (
    <Card>
      <ExpensesFilter />
      {visibleExpenses.length === 0 ? (
        <h2 className={styles.expenses_list__fallback}>Found no expenses.</h2>
      ) : (
        <ul className={styles.expenses_list}>
          {visibleExpenses.map((expense) => (
            <li key={expense.id}>
              <ExpenseItem expense={expense} />
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};

export default ExpensesList;
