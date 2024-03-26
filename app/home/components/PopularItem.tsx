import {ImageBackground, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import AppDivider from "../../../components/AppDivider";
import AppTypography from "../../../components/AppTypography";

const PopularItem = () => {
  return (
    <TouchableOpacity style={{gap: 4}}>
      <Header/>
      <AppTypography className='text-[12px]'>Demon Slayer</AppTypography>
    </TouchableOpacity>
  );
};

const Header = () => {
  return (
    <LinearGradient
      className='w-[121] p-px overflow-hidden rounded-t-[10]'
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.75}}
      colors={['rgba(231, 7, 58, 1)', 'rgba(231, 7, 58, 0)']}>
      <ImageBackground
        className='w-[120px] h-[160px] justify-end '
        imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}
        source={require('../../../assets/images/demen.jpeg')}
        resizeMode={"cover"}
      >
        <LinearGradient
          colors={['#191B1C', 'transparent']}
          style={{height: 50}}
          start={{x: 0, y: 1.5}}
          end={{x: 0, y: 0}}
        />
      </ImageBackground>
      <AppDivider/>
    </LinearGradient>
  )
}
export default PopularItem