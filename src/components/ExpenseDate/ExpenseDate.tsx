import styles from "./ExpenseDate.module.css";

interface ExpenseDateProps {
  date: Date;
}

const ExpenseDate = ({ date }: ExpenseDateProps) => {
  const newDate = new Date(date);
  
  const month = newDate.toLocaleString("en-US", { month: "long" });
  const day = newDate.toLocaleString("en-US", { day: "2-digit" });
  const year = newDate.getFullYear();

  return (
    <div className={styles.expense_date}>
      <div className={styles.expense_date__month}>{month}</div>
      <div className={styles.expense_date__year}>{year}</div>
      <div className={styles.expense_date__day}>{day}</div>
    </div>
  );
};

export default ExpenseDate;
