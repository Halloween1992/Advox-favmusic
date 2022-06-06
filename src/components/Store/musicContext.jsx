import React from "react";

const musicContext = React.createContext({
  musicList: [],
  musicIsinTheList: false,
  addMusic() {},
  deleteMusic() {},
  addToFavorite() {},
});

export default musicContext;
