import {FC} from "react";
import {View} from "react-native";
import {replaceBrTagWithNewline} from "../../../utils/text-helper";
import IconStar from "../../../assets/icons/IconStar";
import GenreItem from "./GenreItem";
import AppTypography from "../../../components/AppTypography";

type DescriptionProps = {
  title: string,
  genre: string[],
  rating: number,
  description: string,
}

const Description: FC<DescriptionProps> = ({title, rating, genre, description}) => {
  return (
    <View className='p-5' style={{gap: 20}}>
      <View className='flex-row justify-between'>
        <AppTypography weight='bold'
                       className='text-[28px]'>{title}</AppTypography>
        <View style={{gap: 6}} className='flex-row '>
          <IconStar className='w-[18px] mt-1'/>
          <AppTypography weight='bold' className='self-center text-[14px]'>{rating / 10}</AppTypography>
        </View>
      </View>
      <AppTypography
        className='text-[13px]'
        weight='regular'>{replaceBrTagWithNewline(description)}</AppTypography>
      <View style={{gap: 12}} className='flex-row flex-wrap'>
        {genre?.map((it, i) => <GenreItem key={i} title={it}/>)}
      </View>
    </View>
  );
};

export default Description;