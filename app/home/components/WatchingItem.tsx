import {ImageBackground, TouchableOpacity, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import AppDivider from "../../../components/AppDivider";
import AppTypography from "../../../components/AppTypography";

const WatchingItem = () => {
  return (
    <TouchableOpacity style={{gap: 4}}>
      <Header/>
      <View style={{gap: 2}}>
        <AppTypography className='text-[16px]'>Demon Slayer</AppTypography>
        <AppTypography className='text-[10px]'>S02 : E08</AppTypography>
      </View>
    </TouchableOpacity>
  );
};

const Header = () => {
  return (
    <LinearGradient
      className='w-[181] p-px overflow-hidden rounded-t-[10]'
      start={{x: 0, y: 0}}
      end={{x: 0, y: 0.75}}
      colors={['rgba(231, 7, 58, 1)', 'rgba(231, 7, 58, 0)']}>
      <ImageBackground
        className='w-[180px] h-[130px] justify-end '
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
export default WatchingItem