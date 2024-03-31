import {ImageBackground} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import AppDivider from "../../../components/AppDivider";

const EpisodeItem = () => {
  return (
    <EpisodeImage/>
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