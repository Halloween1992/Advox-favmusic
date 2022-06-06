import classes from "./MainNavigation.module.css";
import { useTranslation, Trans } from "react-i18next";

const lngs = {
  en: { nativeName: "English" },
  pl: { nativeName: "Polski" },
};

const MainNavigation = () => {
  const { i18n } = useTranslation();
  return (
    <header>
      <div className={classes.logo}>
        <Trans i18nKey={"header_logo"}> Music Library</Trans>
      </div>
      <div></div>
      <div>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            className={i18n.resolvedLanguage === lng ? classes.active : ""}
            onClick={() => i18n.changeLanguage(lng)}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </div>
    </header>
  );
};

export default MainNavigation;
