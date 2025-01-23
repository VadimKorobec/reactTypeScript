import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/state";
import { filtereExpenses } from "../../redux/expensesSlice";


import styles from "./ExpensesFilter.module.css";

const ExpensesFilter = () => {
  const dispatch = useDispatch<AppDispatch>()
  
  const handlerChangeDropdown = (e: ChangeEvent<HTMLSelectElement>) => {
    dispatch(filtereExpenses(e.target.value))
  };

  return (
    <div className={styles.expenses_filter}>
      <div className={styles.expenses_filter__control}>
        <label>Filter by year</label>
        <select onChange={handlerChangeDropdown}>
          <option value="all">All Years</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
          <option value="2026">2026</option>
          <option value="2027">2027</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
