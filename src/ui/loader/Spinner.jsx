import styles from "./Spinner.module.css";

export default function Spinner({ Styles = "h-[100vh] min-h-full" }) {
  return (
    <div className={`flexCenter ${Styles} bg-transparent backdrop-blur-sm`}>
      <div
        className={`${styles.loader} h-[4px] w-[4px] rounded-[50%] text-orange`}
      ></div>
    </div>
  );
}
