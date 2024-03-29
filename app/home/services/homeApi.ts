import {useApi} from "../../../utils/api-helper";
import {Anime, AnimeResult, getAnimeProps, RecentAnime} from "../types/homeApiType";

export const getPopularAnime = async ({page = 1, perPage = 8}: getAnimeProps) => {
  const response = await useApi.get<Anime<AnimeResult>>('/popular', {
    params: {
      page,
      perPage
    }
  });
  return response.data;
}
export const getTrendingAnime = async ({page = 1, perPage = 8}: getAnimeProps) => {
  const response = await useApi.get<Anime<AnimeResult>>('/trending', {
    params: {
      page,
      perPage
    }
  });
  return response.data;
}

export const getRecentAnime = async ({page = 1, perPage = 8}: getAnimeProps) => {
  const response = await useApi.get<Anime<RecentAnime>>('/recent-episodes', {
    params: {
      page,
      perPage
    }
  })
  return response.data;
}