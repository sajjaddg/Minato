import {FC} from "react";
import {View} from "react-native";
import {replaceBrTagWithNewline} from "../../../utils/text-helper";
import IconStar from "../../../assets/icons/IconStar";
import GenreItem from "./GenreItem";
import AppTypography from "../../../components/AppTypography";

export type DescriptionProps = {
  title: string,
  genres: string[],
  rating: number,
  description: string,
}
type DescriptionProp = {
  data: DescriptionProps | undefined
}

const Description: FC<DescriptionProp> = ({data}) => {
  const {title, genres, rating, description} = data ?? {}
  return (
    <View className='p-5' style={{gap: 20}}>
      <View className='flex-row justify-between'>
        <AppTypography weight='bold'
                       className='text-[28px]'>{title}</AppTypography>
        <View style={{gap: 6}} className='flex-row '>
          <IconStar className='w-[18px] mt-1'/>
          <AppTypography weight='bold' className='self-center text-[14px]'>{(rating ?? 0) / 10}</AppTypography>
        </View>
      </View>
      <AppTypography
        className='text-[13px]'
        weight='regular'>{replaceBrTagWithNewline(description ?? '')}</AppTypography>
      <View style={{gap: 12}} className='flex-row flex-wrap'>
        {genres?.map((it, i) => <GenreItem key={i} title={it}/>)}
      </View>
    </View>
  );
};

export default Description;