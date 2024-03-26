import {AnimeResult} from "../../types/homeApiType";

const UseAnimeItem = (data: AnimeResult) => {
  const {title, id, image, color} = data ?? {}

  return {
    title: title.english,
    id,
    image,
    color
  }
};

export default UseAnimeItem