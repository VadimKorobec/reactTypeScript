import { Expense } from "../../types/expense.type";
import Card from "../Card/Card";

import ExpenseItem from "../ExpenseItem/ExpenseItem";

interface ExpensesListProps {
  expenses: Expense[];
}

const ExpensesList = ({ expenses }: ExpensesListProps) => {
  return (
    <Card>
      <ul style={{ listStyle: "none" }}>
        {expenses.map((expense) => (
          <li key={expense.id}>
            <ExpenseItem expense={expense} />
          </li>
        ))}
      </ul>
    </Card>
  );
};



export default ExpensesList;
