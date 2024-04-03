import {FC} from "react";
import {ImageBackground, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {shortenTitle} from "../../../utils/text-helper";
import AppDivider from "../../../components/AppDivider";
import AppTypography from "../../../components/AppTypography";

type EpisodeProps = {
  title: string,
  image: string,
  description: string | null
}

const EpisodeItem: FC<EpisodeProps> = ({title, image, description}) => {
  return (
    <View style={{gap: 12}} className='flex-row'>
      <EpisodeImage {...{image}}/>
      <View style={{gap: 8}}>
        <AppTypography className='text-[16px]'>{title}</AppTypography>
        <AppTypography
          weight='light'
          className='text-[12px] max-w-[230px]'>
          {shortenTitle(description ?? '', 100)}</AppTypography>
      </View>
    </View>
  );
};

const EpisodeImage = ({image}: { image: string }) => {
  return (
    <ImageBackground
      className='w-[140px] h-[90px] justify-end'
      imageStyle={{borderRadius: 10}}
      source={{uri: image}}
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