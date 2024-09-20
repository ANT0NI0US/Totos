import styles from "./Spinner.module.css";

function Spinner({
  height = "h-[100vh]",
  minimumHeight = "min-h-full",
  backgroundColor = "bg-slate-200/20",
}) {
  return (
    <div
      className={`flex ${height}  ${minimumHeight} ${backgroundColor}  items-center justify-center  backdrop-blur-sm`}
    >
      <div
        className={`${styles.loader} text-primary h-[4px] w-[4px] rounded-[50%]`}
      ></div>
    </div>
  );
}

export default Spinner;
