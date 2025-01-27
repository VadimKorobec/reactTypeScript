import styles from "./ChartBar.module.css";

interface ChartBarProps{
    
}

const ChartBar = () => {
  return (
    <div className={styles.chart_bar}>
      <div className={styles.chart_bar__inner}>
        <div className={styles.chart_bar__fill}></div>
      </div>
      <div className={styles.chart_bar__label}></div>
    </div>
  );
};

export default ChartBar;
