import {useMemo} from "react";
import {ScrollView, View} from "react-native";
import {useQuery} from "@tanstack/react-query";
import {MovieSlider, AnimeItem, SliderImage} from "../components";
import AppDivider from "../../../components/AppDivider";
import {getPopularAnime, getTrendingAnime} from "../services/homeApi";


function HomeScreen() {
  const {isPending: popularLoading, data: apiPopularData} = useQuery({
    queryKey: ['popular'],
    queryFn: () => getPopularAnime({})
  })
  const popularData = useMemo(() => popularLoading ? [] : apiPopularData?.results, [popularLoading, apiPopularData])

  const {isPending: TrendingLoading, data: apiTrendingData} = useQuery({
    queryKey: ['trending'],
    queryFn: () => getTrendingAnime({})
  })
  const trendingData = useMemo(() => TrendingLoading ? [] : apiTrendingData?.results, [TrendingLoading, apiTrendingData])

  return (
    <ScrollView style={{gap: 2}} className='flex-1 bg-background-dark'>
      <SliderImage/>
      <AppDivider/>
      <View style={{gap: 12, marginBottom: 64}}>
        {/*<MovieSlider*/}
        {/*  contentContainerStyle={{gap: 12, paddingHorizontal: 24}}*/}
        {/*  title='Continue Watching'*/}
        {/*  renderItem={WatchingItem}*/}
        {/*  {...{data}}*/}
        {/*/>*/}
        <MovieSlider
          contentContainerStyle={{gap: 12, paddingHorizontal: 24}}
          title='Popular'
          renderItem={({item}) => <AnimeItem data={item}/>}
          data={popularData}
          loading={popularLoading}
        />
        <MovieSlider
          contentContainerStyle={{gap: 12, paddingHorizontal: 24}}
          title='Trending'
          renderItem={({item}) => <AnimeItem data={item}/>}
          data={trendingData}
          loading={TrendingLoading}
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen