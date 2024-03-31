import {ScrollView, View} from "react-native";
import HeaderImage from "../components/HeaderImage";
import AppDivider from "../../../components/AppDivider";
import Description from "../components/Description";
import AppTypography from "../../../components/AppTypography";
import EpisodeItem from "../components/EpisodeItem";

function AnimeDetailScreen() {
  return (
    <ScrollView className='flex-1 bg-background-dark'>
      <HeaderImage image={'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx21459-DUKLgasrgeNO.jpg'}/>
      <AppDivider/>
      <Description/>
      <AppDivider color='#383e41'/>
      <View style={{gap: 28}} className='p-5'>
        <AppTypography weight='bold' className='text-[16px]'>Episodes</AppTypography>
        <View style={{gap:12}}>
          <EpisodeItem/>
          <EpisodeItem/>
          <EpisodeItem/>
          <EpisodeItem/>
        </View>
      </View>
    </ScrollView>
  )
}


export default AnimeDetailScreen