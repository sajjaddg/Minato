import {useLocalSearchParams} from "expo-router";
import {ActivityIndicator, ScrollView, View} from "react-native";
import CallAnimeDetailApi from "./services/CallAnimeDetailApi";
import HeaderImage from "./components/HeaderImage";
import AppDivider from "../../components/AppDivider";
import Description from "./components/Description";
import AppTypography from "../../components/AppTypography";
import EpisodeItem from "./components/EpisodeItem";

export default function Page() {
  const {id} = useLocalSearchParams<{ id: string }>()
  const {data, isPending, error} = CallAnimeDetailApi(id);
  if (isPending)
    return (
      <View
        className='flex-1 bg-background-dark'
        style={{justifyContent: 'center', alignItems: 'center'}}
      >
        <ActivityIndicator size='large' color="#e7073a"/>
      </View>
    )

  return (
    <ScrollView className='flex-1 bg-background-dark'>
      <HeaderImage
        image={data?.image ?? ''}/>
      <AppDivider/>
      <Description
        title={data?.title.english ?? ''}
        description={data?.description ?? ''}
        rating={data?.rating ?? 0}
        genre={data?.genres ?? []}
      />
      <AppDivider color='#383e41'/>
      <View style={{gap: 28}} className='p-5'>
        <AppTypography weight='bold' className='text-[16px]'>Episodes</AppTypography>
        <View style={{gap: 12}}>
          {data?.episodes?.map(it =>
            <EpisodeItem
              key={it.title + it.number}
              title={it.title ?? it.number}
              image={it.image ?? data.image}
              description={it.description ?? data.description}
            />)}
        </View>
      </View>
    </ScrollView>
  )
}