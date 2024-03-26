import {useMemo} from "react";
import {ScrollView, View} from "react-native";
import {MovieSlider, PopularItem, SliderImage, WatchingItem} from "../components";
import AppDivider from "../../../components/AppDivider";


function HomeScreen() {

  const data = useMemo(() => [
    {
      id: 0,
    },
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    }
  ], [])

  return (
    <ScrollView style={{gap: 2}} className='flex-1 bg-background-dark'>
      <SliderImage/>
      <AppDivider/>
      <View style={{gap: 26, marginBottom: 64}}>
        <MovieSlider
          contentContainerStyle={{gap: 12, paddingHorizontal: 24}}
          title='Continue Watching'
          renderItem={WatchingItem}
          {...{data}}
        />
        <MovieSlider
          contentContainerStyle={{gap: 12, paddingHorizontal: 24}}
          title='Popular'
          renderItem={PopularItem}
          {...{data}}
        />
      </View>
    </ScrollView>
  )
}

export default HomeScreen