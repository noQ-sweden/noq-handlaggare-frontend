import languageIcon from "./../../assets/images/language.png";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

Language.propTypes = {
  isDropdownOpen: PropTypes.any,
  onClick: PropTypes.any,
};

export default function Language({ isDropdownOpen, onClick }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    console.log(i18n);
  };
  return (
    <>
      <span className="hidden md:block">{t("choseLang")}</span>

      <div className="relative ml-5 mr-5">
        <button
          className="block h-8 w-8 rounded-full overflow-hidden focus:outline-none focus:border-white"
          onClick={onClick}
        >
          <img src={languageIcon} className="h-8 w-8 object-cover" alt="user" />
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl overflow-hidden">
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white"
              onClick={() => changeLanguage("sv")}
            >
              {t("sv")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white"
              onClick={() => changeLanguage("en")}
            >
              {t("en")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white "
            >
              {t("sp")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white"
            >
              {t("ry")}
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-500 hover:text-white"
            >
              {t("alv")}
            </a>
          </div>
        )}
      </div>
    </>
  );
}
