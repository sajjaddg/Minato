export type getAnimeProps = {
  page?: number,
  perPage?: number
}

export type AnimeResult = {
  id: string;
  malId: number;
  title: {
    romaji: string;
    english: string;
    native: string;
    userPreferred: string;
  };
  image: string;
  imageHash: string;
  trailer: {
    id: string;
    site: string;
    thumbnail: string;
    thumbnailHash: string;
  };
  description: string;
  status: string;
  cover: string;
  coverHash: string;
  rating: number;
  releaseDate: number;
  color: string;
  genres: string[];
  totalEpisodes: number;
  duration: number;
  type: string;
};

export type RecentAnime = {
  id: string;
  malId: string;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  image: string;
  imageHash: string;
  episodeId: string;
  episodeTitle: string;
  episodeNumber: number;
  type: string;
};

export type Anime<T> = {
  currentPage: number;
  hasNextPage: boolean;
  results: T[];
};