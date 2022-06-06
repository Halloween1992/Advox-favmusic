import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          header_logo: "Music Library",
          form: {
            title: "Add Your Favorite Music",
            error_msg: "Please add a title.",
            success_msg: "Added to the list.",
            exists_msg: "Already exists in the list.",
            button: "Add to List",
          },
          list: {
            head: "Music List",
            sort: "Sort by:",
            newest: "Newest",
            oldest: "Oldest",
            title: "Title",
            empty: "Your list is empty, start adding one.",
          },
        },
      },
      pl: {
        translation: {
          header_logo: "Biblioteka muzyki",
          form: {
            title: "Dodaj swoją ulubioną muzykę",
            error_msg: "Proszę dodać tytuł.",
            success_msg: "Dodano do listy.",
            exists_msg: "Istnieje już na liście.",
            button: "Dodaj do listy",
          },
          list: {
            head: "Lista muzyki",
            sort: "Sortuj według:",
            newest: "Najnowszy",
            oldest: "Najstarszy",
            title: "Tytuł",
            empty: "Twoja lista jest pusta, zacznij dodawać.",
          },
        },
      },
    },
  });

export default i18n;
