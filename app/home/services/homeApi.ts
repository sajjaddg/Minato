import {useApi} from "../../../utils/api-helper";
import {Anime, getPopularAnimeProps} from "../types/homeApiType";

export const getPopularAnime = async ({page = 1, perPage = 8}: getPopularAnimeProps) => {
  const response = await useApi.get<Anime>('/popular', {
    params: {
      page,
      perPage
    }
  });
  return response.data;
}
export const getTrendingAnime = async ({page = 1, perPage = 8}: getPopularAnimeProps) => {
  const response = await useApi.get<Anime>('/trending', {
    params: {
      page,
      perPage
    }
  });
  return response.data;
}