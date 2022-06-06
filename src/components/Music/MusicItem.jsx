import React, { useContext } from "react";
import { MdFavoriteBorder, MdDeleteOutline, MdFavorite } from "react-icons/md";

import musicContext from "../Store/musicContext";
const MusicItem = (props) => {
  const { deleteMusic, addToFavorite } = useContext(musicContext);

  const onDeleteHandler = () => {
    deleteMusic(props.id);
  };

  const onAddToFavorite = () => {
    addToFavorite(props.id, props.isFavorite);
  };

  return (
    <>
      <li>{props.title}</li>
      <div>
        <span onClick={onAddToFavorite}>
          {props.isFavorite ? <MdFavorite /> : <MdFavoriteBorder />}
        </span>
      </div>
      <div>
        <span onClick={onDeleteHandler}>{<MdDeleteOutline />}</span>
      </div>
    </>
  );
};

export default MusicItem;
