export default function Button({
  children,
  type = "button",
  onClick,
  variation = "primary",
  Font = "text-base font-bold h-[45px]",
  disabled,
}) {
  const base = `focus:outline-none focus:ring focus:ring-offset-2 w-full rounded-md border 
  ${Font} text-bgColor transition-all 
  ${disabled && "cursor-not-allowed border-slate-400 bg-slate-400"}`;
  const styles = {
    primary: base + ` bg-primary ${!disabled && "hover:bg-opacity-[0.8]"}`,
    secondary:
      base +
      ` border-darkB bg-bgColor text-darkB hover:border-primary 
    ${!disabled && "hover:bg-primary hover:text-bgColor"}`,
  };
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={styles[variation]}
    >
      {children}
    </button>
  );
}
