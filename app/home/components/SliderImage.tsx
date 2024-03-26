import {ImageBackground, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import AppTypography from "../../../components/AppTypography";

const SliderImage = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/slider.png')}
      style={{
        height: 380,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        width: '100%',
      }}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['#191B1C', 'transparent']}
        style={{height: 200}}
        start={{x: 0, y: 1}}
        end={{x: 0, y: 0}}
      />
      <View className='absolute p-6 flex-col gap-0.5'>
        <AppTypography className='text-[36px]' variant='PassionOne'>CHAINSAW MAN</AppTypography>
        <View className='flex-row items-center pb-2'>
          <AppTypography className='text-[16px]' weight='light'>CHAINSAW MAN</AppTypography>
          <AppTypography className='text-[12px] ml-6'>SEASON 01</AppTypography>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SliderImage;