import styles from "./Loader.module.css";

function Loader({ height = "h-[100vh]" }) {
  return (
    <div
      className={`flex ${height} items-center justify-center bg-slate-200/20 backdrop-blur-sm`}
    >
      <div
        className={`${styles.loader} text-primary h-[4px] w-[4px] rounded-[50%]`}
      ></div>
    </div>
  );
}

export default Loader;
