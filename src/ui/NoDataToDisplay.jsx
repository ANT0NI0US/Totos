import { BiErrorCircle } from "react-icons/bi";

export default function NoDataToDisplay({ text }) {
  return (
    <div className="flexCenter mt-[20px] gap-1 rounded-md bg-secondary/50 p-[20px] text-center text-light">
      <BiErrorCircle size={25} />
      <p className="text-lg uppercase">{text}</p>
    </div>
  );
}
