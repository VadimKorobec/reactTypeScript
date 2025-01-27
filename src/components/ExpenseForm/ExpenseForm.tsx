import { FormEvent, useRef } from "react";
import styles from "./ExpenseForm.module.css";
import { Expense } from "../../types/expense.type";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/state";
import { addExpenses } from "../../redux/expensesSlice";

const ExpenseForm = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current && amountRef.current && dateRef.current) {
      const expenseDate: Expense = {
        id: nanoid(),
        title: titleRef.current.value,
        amount: Number(amountRef.current.value),
        date: dateRef.current.value,
      };

      dispatch(addExpenses(expenseDate));
      reset();
    }
  };

  const reset = () => {
    if (titleRef.current && amountRef.current && dateRef.current) {
      titleRef.current.value = "";
      amountRef.current.value = "";
      dateRef.current.value = "";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.new_expense__controls}>
        <div className={styles.new_expense__control}>
          <label>Title</label>
          <input ref={titleRef} type="text" required />
        </div>
        <div className={styles.new_expense__control}>
          <label>Amount</label>
          <input
            ref={amountRef}
            type="number"
            min="0.01"
            step="0.01"
            required
          />
        </div>
        <div className={styles.new_expense__control}>
          <label>Date</label>
          <input
            ref={dateRef}
            type="date"
            min="2025-01-01"
            max="2027-01-01"
            required
          />
        </div>
      </div>
      <div className={styles.new_expense__actions}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
