import {ImageBackground, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import AppTypography from "../../../../components/AppTypography";
import {AnimeResult} from "../../types/homeApiType";
import usePopularItem from "./useAnimeItem";

const AnimeItem = ({data}: { data: AnimeResult }) => {
  const {title, image, color} = usePopularItem(data)
  return (
    <TouchableOpacity style={{gap: 4}} className='w-[122px]'>
      <Header {...{image, color}}/>
      <AppTypography
        className='text-[12px] w-[80%] max-h-14'
        ellipsizeMode='tail'
        numberOfLines={2}>{title}</AppTypography>
    </TouchableOpacity>
  );
};

const Header = ({image, color}: { image: string, color: string }) => {
  return (
    <LinearGradient
      className='w-full p-px overflow-hidden rounded-t-[10px]'
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.75}}
      colors={[color, 'transparent']}>
      <ImageBackground
        className='w-[120px] h-[160px] justify-end '
        imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        source={{uri: image}}
        resizeMode="cover"
      >
        <LinearGradient
          colors={['#191B1C', 'transparent']}
          style={{height: 50}}
          start={{x: 0, y: 1.5}}
          end={{x: 0, y: 0}}
        />
      </ImageBackground>
    </LinearGradient>
  )
}
export default AnimeItem