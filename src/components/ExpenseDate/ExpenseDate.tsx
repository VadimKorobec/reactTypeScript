import styles from "./ExpenseDate.module.css";

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate = ({ date }: ExpenseDateProps) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className={styles.expense_date}>
      <div className={styles.expense_date__month}>{month}</div>
      <div className={styles.expense_date__year}>{year}</div>
      <div className={styles.expense_date__day}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
