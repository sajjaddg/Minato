type Character = {
  id: number;
  role: string;
  name: {
    first: string;
    last: string | null;
    full: string;
    native: string;
    userPreferred: string;
  };
  image: string;
  imageHash: string;
  voiceActors: {
    id: number;
    language: string;
    name: {
      first: string;
      last: string;
      full: string;
      native: string;
      userPreferred: string;
    };
    image: string;
    imageHash: string;
  }[];
};

type Title = {
  romaji: string;
  english: string;
  native: string;
  userPreferred?: string;
};

type Trailer = {
  id: string;
  site: string;
  thumbnail: string;
  thumbnailHash: string;
};

type Recommendation = {
  id: number;
  malId: number;
  title: Title;
  status: string;
  episodes: number;
  image: string;
  imageHash: string;
  cover: string;
  coverHash: string;
  rating: number;
  type: string;
};

type Relation = {
  id: number;
  relationType: string;
  malId: number;
  title: Title;
  status: string;
  episodes: number | null;
  image: string;
  imageHash: string;
  color: string | null;
  type: string;
  cover: string;
  coverHash: string;
  rating: number;
};

type Mapping = {
  id: string;
  providerId: string;
  similarity: number;
  providerType: string;
};

type Artwork = {
  img: string;
  type: string;
  providerId: string;
};

type Episode = {
  id: string;
  title: string;
  description: string | null;
  number: number;
  image: string;
  imageHash: string;
  airDate: string | null;
};

export type AnimeDetailData = {
  id: string;
  title: Title;
  malId: number;
  synonyms: string[];
  isLicensed: boolean;
  isAdult: boolean;
  countryOfOrigin: string;
  trailer: Trailer;
  image: string;
  imageHash: string;
  popularity: number;
  color: string;
  cover: string;
  coverHash: string;
  description: string;
  status: string;
  releaseDate: number;
  startDate: {
    year: number;
    month: number;
    day: number;
  };
  endDate: {
    year: number | null;
    month: number | null;
    day: number | null;
  };
  nextAiringEpisode: {
    airingTime: number;
    timeUntilAiring: number;
    episode: number;
  };
  totalEpisodes: number;
  currentEpisode: number;
  rating: number;
  duration: number | null;
  genres: string[];
  season: string;
  studios: string[];
  subOrDub: string;
  type: string;
  recommendations: Recommendation[];
  characters: Character[];
  relations: Relation[];
  mappings: Mapping[];
  artwork: Artwork[];
  episodes: Episode[];
};
