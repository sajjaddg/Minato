import {ImageBackground, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import AppTypography from "../../../../components/AppTypography";
import {AnimeResult} from "../../types/homeApiType";
import usePopularItem from "./useAnimeItem";
import {shortenTitle} from "../../../../utils/text-helper";

const AnimeItem = ({data}: { data: AnimeResult }) => {
  const {title, image} = usePopularItem(data)
  return (
    <TouchableOpacity style={{gap: 4}} className='w-[122px]'>
      <Header {...{image}}/>
      <AppTypography
        className='text-[12px]'>{shortenTitle(title??'',30)}</AppTypography>
    </TouchableOpacity>
  );
};

const Header = ({image}: { image: string}) => {
  return (
    <LinearGradient
      className='w-full p-px overflow-hidden rounded-[10px]'
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.75}}
      colors={['#E7073A', 'transparent']}>
      <ImageBackground
        className='w-[120px] h-[160px] justify-end '
        imageStyle={{borderRadius: 10}}
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