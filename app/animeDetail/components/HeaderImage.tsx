import {FC} from "react";
import {ImageBackground} from "react-native";
import {LinearGradient} from "expo-linear-gradient";

type HeaderImageProps = {
  image: string
}
const HeaderImage: FC<HeaderImageProps> = ({image}) => {
  return (
    <ImageBackground
      className='h-[380px] justify-end w-full relative'
      source={{uri: image}}
      resizeMode="cover"
    >
      <LinearGradient
        className='h-1/2'
        colors={['#191B1C', 'transparent']}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
      />
    </ImageBackground>
  );
};

export default HeaderImage