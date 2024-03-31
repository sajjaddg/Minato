import {View} from "react-native";
import AppTypography from "../../../components/AppTypography";
import {LinearGradient} from "expo-linear-gradient";

function GenreItem() {
  return (
    <LinearGradient
      className='p-px self-start rounded-[6px] overflow-hidden'
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      colors={['transparent', '#e7073acc']}
    >
      <View className='px-4 py-2 rounded-[6px] bg-background-dark'>
        <AppTypography>Adventure</AppTypography>
      </View>
    </LinearGradient>
  );
}

export default GenreItem;