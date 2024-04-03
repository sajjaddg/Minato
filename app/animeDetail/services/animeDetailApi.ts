import {useApi} from "../../../utils/api-helper";
import {AnimeDetailData} from "../types/animeApiDetailtypes";

export const getAnimeDetail = async (id: string | undefined) => {
  const response = await useApi.get<AnimeDetailData>(`/info/${id}`)

  return response.data;
}