import React, { useContext, useState } from "react";

import musicContext from "../Store/musicContext";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";

import { Trans, useTranslation } from "react-i18next";

const MusicForm = () => {
  // This app uses i18Next for translation.
  // All text data comes from '/i18n.js' file.
  useTranslation();

  const { addMusic, musicList } = useContext(musicContext);
  const [musicTitle, setMusicTitle] = useState("");
  const [isInTheList, setIsInTheList] = useState(false);
  const [hasError, setHassError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const titleInputHandler = (e) => {
    setMusicTitle(e.target.value);
    setHassError(false);
    setIsInTheList(false);
  };

  const onFromSubmitHandler = (e) => {
    e.preventDefault();

    if (musicTitle === "") {
      setHassError(true);
      return;
    }

    const existingItemIdnex = musicList.findIndex(
      (i) => i.title === musicTitle
    );
    if (existingItemIdnex >= 0) {
      setIsInTheList(true);
      return;
    }

    setIsSending(true);
    addMusic(musicTitle);
    setMusicTitle("");

    setTimeout(() => {
      setIsSending(false);
    }, 2000);
  };

  return (
    <section>
      <Card>
        <h1>
          <Trans i18nKey="form.title" />
        </h1>

        <form onSubmit={onFromSubmitHandler}>
          <Input
            type="text"
            value={musicTitle}
            onChange={titleInputHandler}
            isValid={hasError || isInTheList}
          />
          <Button type="submit">
            {" "}
            <Trans i18nKey="form.button" />
          </Button>
          <div style={{ marginTop: "1rem" }}>
            {hasError && (
              <p>
                <Trans i18nKey="form.error_msg" />
              </p>
            )}

            {!hasError && isSending && !isInTheList && (
              <p>
                <Trans i18nKey="form.success_msg" />
              </p>
            )}

            {isInTheList && (
              <p>
                <Trans i18nKey="form.exists_msg" />
              </p>
            )}
          </div>
        </form>
      </Card>
    </section>
  );
};

export default MusicForm;
