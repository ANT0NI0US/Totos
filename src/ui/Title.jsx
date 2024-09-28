export default function Title({ text, Styles }) {
  return (
    <h1
      className={`text-center font-Monoton text-lg uppercase text-light  sm:text-start sm:text-xl md:text-2xl lg:text-3xl ${Styles}`}
      style={{ letterSpacing: "5px" }}
    >
      {text}
    </h1>
  );
}
