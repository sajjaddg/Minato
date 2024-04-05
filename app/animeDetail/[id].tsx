import {useLocalSearchParams} from "expo-router";
import {ActivityIndicator, ScrollView, View} from "react-native";
import CallAnimeDetailApi from "./services/CallAnimeDetailApi";
import HeaderImage from "./components/HeaderImage";
import AppDivider from "../../components/AppDivider";
import AppLoading from "../../components/AppLoading";
import Description from "./components/Description";
import AppTypography from "../../components/AppTypography";
import EpisodeItem from "./components/EpisodeItem";
import useAnimeDetail from "./hooks/useAnimeDetail";

export default function Page() {
  const {id} = useLocalSearchParams<{ id: string }>()
  const {data, isPending, error} = CallAnimeDetailApi(id);
  const {image, descriptionData, episodes} = useAnimeDetail(data)

  if (isPending)
    return <AppLoading/>

  return (
    <ScrollView className='flex-1 bg-background-dark'>
      <HeaderImage {...{image}}/>
      <AppDivider/>
      <Description data={descriptionData}/>
      <AppDivider color='#383e41'/>
      <View style={{gap: 28}} className='p-5'>
        <AppTypography weight='bold' className='text-[16px]'>Episodes</AppTypography>
        <View style={{gap: 12}}>
          {episodes?.map(it => <EpisodeItem key={it.title + it.number} data={it}/>)}
        </View>
      </View>
    </ScrollView>
  )
}