import React, { useReducer } from "react";
import musicContext from "./musicContext";

if (!localStorage.musicList) {
  localStorage.setItem("musicList", JSON.stringify([]));
}

const inialValue = {
  musicList: JSON.parse(localStorage.getItem("musicList")),
};

const musciReducer = (state, action) => {
  if (action.type === "ADD") {
    localStorage.setItem(
      "musicList",
      JSON.stringify([
        ...state.musicList,
        {
          id: "id" + Math.random().toString(16).slice(2),
          title: action.value,
          date: new Date(),
          isFavorite: false,
        },
      ])
    );
    return {
      musicList: JSON.parse(localStorage.getItem("musicList")),
    };
  }
  const existingItemIdnex = state.musicList.findIndex(
    (i) => i.id === action.id
  );
  let existingItem = state.musicList.at(existingItemIdnex);

  if (action.type === "DELETE") {
    const updatedList = state.musicList.filter(
      (item) => item.id !== existingItem.id
    );

    localStorage.setItem("musicList", JSON.stringify(updatedList));

    return {
      musicList: JSON.parse(localStorage.getItem("musicList")),
    };
  }

  if (action.type === "BEST") {
    existingItem.isFavorite = !action.isFavorite;

    return {
      musicList: state.musicList,
    };
  }
  return inialValue;
};

const ContextPorvider = (props) => {
  const [favMuic, dispatch] = useReducer(musciReducer, inialValue);

  const onAddMusic = (e) => {
    dispatch({
      type: "ADD",
      value: e,
    });
  };
  const onDeleteMusic = (id) => {
    dispatch({
      type: "DELETE",
      id: id,
    });
  };
  const onAddtoFavList = (id, isFavorite) => {
    dispatch({
      type: "BEST",
      id,
      isFavorite,
    });
  };

  const contextValue = {
    musicList: favMuic.musicList,
    addMusic: onAddMusic,
    deleteMusic: onDeleteMusic,
    addToFavorite: onAddtoFavList,
    musicIsinTheList: favMuic.musicIsinTheList,
  };

  return (
    <musicContext.Provider value={contextValue}>
      {props.children}
    </musicContext.Provider>
  );
};

export default ContextPorvider;
