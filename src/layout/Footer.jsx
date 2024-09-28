import Logo from "@/ui/Logo";

const Year = new Date().getFullYear();

export default function Footer() {
  return (
    <div className="bg-primary/70 py-[18px]">
      <div className="flexCenter container h-full flex-wrap gap-2 text-center font-bold">
        <span>Copyright © {Year} </span>
        <Logo />
        <span>All rights reserved by</span>
        <span className="font-Monoton tracking-[5px] text-orange">
          {" "}
          ANTONIOUS NASR KAMEL
        </span>
      </div>
    </div>
  );
}
