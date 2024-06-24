import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ErrorPage() {
  const { t } = useTranslation();
  return (
    <div>
      <p>{t("pageNotFound")}</p>
      <p>
        <NavLink to="/">{t("goBackToHomepage")}</NavLink>
      </p>
    </div>
  );
}
