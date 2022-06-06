import React, { useContext, useState } from "react";

import musicContext from "../Store/musicContext";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import Input from "../UI/Input/Input";

const MusicForm = () => {
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
        <h1>Add Your Favorite Music</h1>
        <form onSubmit={onFromSubmitHandler}>
          <Input
            type="text"
            value={musicTitle}
            onChange={titleInputHandler}
            isValid={hasError || isInTheList}
          />
          <Button type="submit"> Add to List </Button>
          <div style={{ marginTop: "1rem" }}>
            {hasError && <p>Please add a title.</p>}
            {!hasError && isSending && !isInTheList && (
              <p>Added to the list.</p>
            )}
            {isInTheList && (
              <p>{`${musicTitle} - Already exists in the list.`}</p>
            )}
          </div>
        </form>
      </Card>
    </section>
  );
};

export default MusicForm;
