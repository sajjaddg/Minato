import {ScrollView, View} from "react-native";
import {MovieSlider, AnimeItem, RecentSlider, RecentItem} from "../components";
import AppDivider from "../../../components/AppDivider";
import CallHomeApis from "../services/CallHomeApis";


function HomeScreen() {
  const {
    recentData,
    popularData,
    trendingData,
    popularLoading,
    recentLoading,
    trendingLoading,
  } = CallHomeApis()

  return (
    <ScrollView style={{gap: 2}} className='flex-1 bg-background-dark'>
      <RecentSlider data={recentData ?? []} loading={recentLoading}/>
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
          loading={trendingLoading}
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen