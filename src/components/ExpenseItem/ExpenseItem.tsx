import { Expense } from "../../types/expense.type";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import styles from "./ExpenseItem.module.css";

interface ExpenseItemProps {
  expense: Expense;
}

const ExpenseItem = ({ expense }: ExpenseItemProps) => {
  return (
    <div className={styles.expense_item}>
      <ExpenseDate date={expense.date} />
      <div className={styles.expense_item__description}>
        <h2>{expense.title}</h2>
        <div className={styles.expense_item__price}>{expense.amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
