import {useMemo} from "react";
import {useQuery} from "@tanstack/react-query";
import {getPopularAnime, getRecentAnime, getTrendingAnime} from "./homeApi";

const callHomeApis = () => {
  const {
    isPending: recentLoading,
    data: recentPopularData
  } = useQuery({
    queryKey: ['recent'],
    queryFn: () => getRecentAnime({})
  });

  const {
    isPending: popularLoading,
    data: apiPopularData
  } = useQuery({
    queryKey: ['popular'],
    queryFn: () => getPopularAnime({})
  });

  const {
    isPending: trendingLoading,
    data: apiTrendingData
  } = useQuery({
    queryKey: ['trending'],
    queryFn: () => getTrendingAnime({})
  });

  const mergedData = useMemo(() => {
    const popularData = popularLoading ? [] : apiPopularData?.results;
    const trendingData = trendingLoading ? [] : apiTrendingData?.results;
    const recentData = recentLoading ? [] : recentPopularData?.results;

    return {
      popularData,
      trendingData,
      recentData,
      popularLoading,
      trendingLoading,
      recentLoading,
      isLoading: popularLoading || trendingLoading || recentLoading
    };
  }, [popularLoading, trendingLoading, recentLoading, apiPopularData?.results, apiTrendingData?.results, recentPopularData?.results]);

  return {...mergedData}
};

export default callHomeApis