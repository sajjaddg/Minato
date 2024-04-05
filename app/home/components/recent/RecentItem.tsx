import type {FC} from "react";
import {LinearGradient} from "expo-linear-gradient";
import {ImageBackground, Pressable, View} from "react-native";
import {shortenTitle} from "../../../../utils/text-helper";
import {RecentAnime} from "../../types/homeApiType";
import AppTypography from "../../../../components/AppTypography";

type RecentItemProps = {
  data: RecentAnime
}

const RecentItem: FC<RecentItemProps> = ({data}) => {
  const {image, title, episodeTitle} = data ?? {}
  return (
    <Pressable className='w-full'>
      <ImageBackground
        className='h-full justify-end w-full relative'
        source={{uri: image}}
        resizeMode="cover"
      >
        <LinearGradient
          className='h-1/2'
          colors={['#191B1C', 'transparent']}
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
        />
        <View className='absolute w-full p-6 flex-col gap-0.5 '>
          <AppTypography
            className='text-[36px] uppercase' variant='PassionOne'>{shortenTitle(title.english)}</AppTypography>
          <View className='flex-row items-center pb-2'>
            <AppTypography
              className='text-[16px] uppercase'
              weight='light'>{shortenTitle(title.romaji, 22)}</AppTypography>
            <AppTypography className='text-[12px] ml-6 uppercase'>{episodeTitle}</AppTypography>
          </View>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default RecentItem