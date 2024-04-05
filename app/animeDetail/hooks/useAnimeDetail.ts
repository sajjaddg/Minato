import {useMemo} from "react";
import {AnimeDetailData} from "../types/animeApiDetailtypes";
import {DescriptionProps} from "../components/Description";

const useAnimeDetail = (data: AnimeDetailData | undefined) => {
  const {
    image,
    title,
    description,
    episodes,
    rating,
    genres
  } = data ?? {}

  const descriptionData = useMemo(() => {
    return {
      title: title?.english ?? '',
      description: description ?? '',
      rating: rating ?? 0,
      genres: genres ?? []
    }
  }, [title, description, rating, genres, data]) as DescriptionProps;

  const episodesData = useMemo(() => episodes?.map((it, i) => ({
    ...it,
    image: it.image ?? image ?? '',
    description: it.description ?? description ?? '',
    title: it.title ?? `EP-${i + 1}`
  })), [episodes, image, data, description])

  return {
    image: image ?? '',
    descriptionData: descriptionData,
    episodes: episodesData ?? [],
  }
}

export default useAnimeDetail