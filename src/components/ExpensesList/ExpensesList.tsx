import { useSelector } from "react-redux";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import { RootState } from "../../redux/state";
import { Expense } from "../../types/expense.type";

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
      <ul style={{ listStyle: "none" }}>
        {visibleExpenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem expense={expense} />
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default ExpensesList;
