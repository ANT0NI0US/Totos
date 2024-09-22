export default function Title({ text, Styles }) {
  return (
    <h1
      className={`font-Monoton text-start text-xl uppercase text-light sm:text-2xl ${Styles}`}
      style={{ letterSpacing: "5px" }}
    >
      {text}
    </h1>
  );
}
