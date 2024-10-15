import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <main className="flexCenter h-screen w-full flex-col  bg-primary">
      <h1 className="text-bgColor text-9xl font-extrabold tracking-widest">
        404
      </h1>
      <div className="text-bgColor absolute rotate-12 rounded bg-primary px-2 text-sm">
        Page Not Found
      </div>
      <button
        aria-label="Back-home"
        className="text-bgColor mt-5 underline hover:bg-opacity-[0.9]"
      >
        <Link to="/" replace className="flexCenter">
          <span>Back To Home</span>
        </Link>
      </button>
    </main>
  );
}
