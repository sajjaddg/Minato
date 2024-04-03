import {useQuery} from "@tanstack/react-query";
import {getAnimeDetail} from "./animeDetailApi";

const CallAnimeDetailApi = (id: string  | undefined) => {
  const {data, isPending, error} = useQuery(
    {
      queryKey: ['detail', id],
      queryFn: () => getAnimeDetail(id)
    }
  )
  return {data, isPending, error}
};

export default CallAnimeDetailApi