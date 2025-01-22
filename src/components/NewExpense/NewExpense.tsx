import ExpenseForm from "../ExpenseForm/ExpenseForm";

import styles from "./NewExpense.module.css";

const NewExpense = () => {
  return (
    <div className={styles.new_expense}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;
