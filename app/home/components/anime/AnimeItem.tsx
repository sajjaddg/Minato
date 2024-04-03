import {ImageBackground, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {shortenTitle} from "../../../../utils/text-helper";
import {AnimeResult} from "../../types/homeApiType";
import usePopularItem from "./useAnimeItem";
import AppTypography from "../../../../components/AppTypography";
import {Link} from "expo-router";

const AnimeItem = ({data}: { data: AnimeResult }) => {
  const {title, image, id} = usePopularItem(data)
  return (
    <Link href={`/animeDetail/${id}`} asChild>
      <TouchableOpacity style={{gap: 4}} className='w-[122px]'>
        <Header {...{image}}/>
        <AppTypography
          className='text-[12px]'>{shortenTitle(title ?? '', 30)}</AppTypography>
      </TouchableOpacity>
    </Link>
  );
};

const Header = ({image}: { image: string }) => {
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