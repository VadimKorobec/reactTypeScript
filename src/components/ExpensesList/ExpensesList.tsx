import { Expense } from "../../types/expense.type";
import ExpenseItem from "../ExpenseItem/ExpenseItem";

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <ul className="expenses">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseItem expense={expense} />
        </li>
      ))}
    </ul>
  );
};

export default ExpensesList;
