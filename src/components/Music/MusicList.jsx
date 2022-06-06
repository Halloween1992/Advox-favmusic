import React, { useContext, useEffect, useState } from "react";
import { IoList, IoGrid } from "react-icons/io5";

import musicContext from "../Store/musicContext";
import Card from "../UI/Card/Card";
import MusicItem from "./MusicItem";
import classes from "./MusicList.module.css";

const MusicList = () => {
  const { musicList } = useContext(musicContext);
  const [musicData, setMusicData] = useState([]);
  const [sortValue, setSortValue] = useState("");
  const [isDisplayGrid, setIsDisplayGrid] = useState(false);

  useEffect(() => {
    setMusicData(
      musicList.sort(function (x, y) {
        let a = new Date(x.date),
          b = new Date(y.date);
        return b - a;
      })
    );
  }, [musicList]);

  const sortHandler = (e) => {
    const sortBy = e.target.value;
    setSortValue(e.target.value);
    let sortedList;
    if (sortBy === "oldest" || sortBy === "newest") {
      sortedList = musicList.sort((x, y) => {
        let a = new Date(x.date),
          b = new Date(y.date);
        if (sortBy === "oldest") {
          return a - b;
        }
        if (sortBy === "newest") {
          return b - a;
        }
        return sortBy;
      });
    }

    if (sortBy === "title") {
      sortedList = musicList.sort((x, y) => {
        let a = x.title.toUpperCase(),
          b = y.title.toUpperCase();
        return a === b ? 0 : a > b ? 1 : -1;
      });
    }
    if (sortBy === "id") {
      sortedList = musicList.sort((x, y) => {
        let a = x.id.toUpperCase(),
          b = y.id.toUpperCase();
        return a === b ? 0 : a > b ? 1 : -1;
      });
    }
    setMusicData(sortedList);
  };

  const sortListHandler = () => {
    setIsDisplayGrid(false);
  };
  const sortGridHandler = () => {
    setIsDisplayGrid(true);
  };

  return (
    <section>
      <Card className={classes.container__music}>
        <h1>Music List</h1>
        <div className={classes.sort__container}>
          <div className={classes.sort__byContent}>
            <label htmlFor="sort">Sort by</label>
            <select name="sort" value={sortValue} onChange={sortHandler}>
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
              <option value="title">Title</option>
              <option value="id">ID</option>
            </select>
          </div>

          <div className={classes.sort__display}>
            <span
              onClick={sortListHandler}
              className={!isDisplayGrid ? classes.active : classes.sort__list}
            >
              {<IoList />}
            </span>
            <span
              onClick={sortGridHandler}
              className={isDisplayGrid ? classes.active : classes.sort__grid}
            >
              {<IoGrid />}
            </span>
          </div>
        </div>
        <ul
          className={
            !isDisplayGrid ? classes.container__list : classes.container__grid
          }
        >
          {musicList.length > 0 &&
            musicData.map((music) => (
              <div className={classes.music__item} key={music.id}>
                <MusicItem
                  id={music.id}
                  title={music.title}
                  isFavorite={music.isFavorite}
                />
              </div>
            ))}
          {musicList.length <= 0 && (
            <h4>Your list is empty, start adding one.</h4>
          )}
        </ul>
      </Card>
    </section>
  );
};

export default MusicList;
