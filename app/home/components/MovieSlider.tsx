import type {FC} from "react";
import {FlatList, FlatListProps, TouchableOpacity, View} from "react-native";
import AppTypography from "../../../components/AppTypography";

interface MovieSliderProps extends FlatListProps<any> {
  title: string,
}

const MovieSlider: FC<MovieSliderProps> = ({title, ...props}) => {
  return (
    <View style={{gap: 12}}>
      <View className='flex-row justify-between items-end px-6 pt-6'>
        <AppTypography weight='bold' className='text-[18px]'>{title}</AppTypography>
        <TouchableOpacity>
          <AppTypography weight='light' className='text-[12px]'>See All</AppTypography>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        {...props}
      />
    </View>
  );
};

export default MovieSlider;