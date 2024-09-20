import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  const { t } = useTranslation();
  return (
    <main className="flexCenter h-screen w-full flex-col  bg-primary">
      <h1 className="text-9xl font-extrabold tracking-widest text-bgColor">
        404
      </h1>
      <div className="absolute rotate-12 rounded bg-primary px-2 text-sm text-bgColor">
        {t("general.pageNotFound")}
      </div>
      <button className="mt-5 text-bgColor underline hover:bg-opacity-[0.9]">
        <Link to="/dashboard" replace className="flexCenter">
          <span>{t("general.backToDashboard")}</span>
        </Link>
      </button>
    </main>
  );
}
