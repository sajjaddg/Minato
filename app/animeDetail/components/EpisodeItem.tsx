import {ImageBackground, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {shortenTitle} from "../../../utils/text-helper";
import AppDivider from "../../../components/AppDivider";
import AppTypography from "../../../components/AppTypography";

const EpisodeItem = () => {
  return (
    <View style={{gap: 12}} className='flex-row'>
      <EpisodeImage/>
      <View style={{gap: 8}}>
        <AppTypography className='text-[16px]'>1 : Ryomen Sukuna</AppTypography>
        <AppTypography weight='light' className='text-[12px] max-w-[230px]'>{shortenTitle('As Itadori cares for his grandpa, Fushiguro worries that he\'s carrying a cursed object of rare power. The Occult club messes with something far beyond their understanding.',100)}</AppTypography>
      </View>
    </View>
  );
};

const EpisodeImage = () => {
  return (
    <ImageBackground
      className='w-[140px] h-[90px] justify-end'
      imageStyle={{borderRadius: 10}}
      source={require('../../../assets/images/demen.jpeg')}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['#191B1C', 'transparent']}
        style={{height: 25}}
        start={{x: 0, y: 1.5}}
        end={{x: 0, y: 0}}
      />
      <AppDivider/>
    </ImageBackground>
  )
}

export default EpisodeItem;