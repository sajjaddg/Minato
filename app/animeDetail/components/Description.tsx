import {View} from "react-native";
import AppTypography from "../../../components/AppTypography";
import {replaceBrTagWithNewline, shortenTitle} from "../../../utils/text-helper";
import IconStar from "../../../assets/icons/IconStar";
import GenreItem from "./GenreItem";

const Description = () => {
  return (
    <View className='p-5' style={{gap: 20}}>
      <View className='flex-row justify-between'>
        <AppTypography weight='bold'
                       className='text-[28px]'>{'Hagane no Renkinjutsushi: FULLMETAL ALCHEMIST'}</AppTypography>
        <View style={{gap: 6}} className='flex-row '>
          <IconStar className='w-[18px] mt-1'/>
          <AppTypography weight='bold' className='self-center text-[14px]'>8.5</AppTypography>
        </View>
      </View>
      <AppTypography
        className='text-[13px]'
        weight='regular'>{replaceBrTagWithNewline('In the near future, a Virtual Reality Massive Multiplayer Online Role-Playing Game (VRMMORPG) called Sword Art Online has been released where players control their avatars with their bodies using a piece of technology called Nerve Gear. One day, players discover they cannot log out, as the game creator is holding them captive unless they reach the 100th floor of the game\'s tower and defeat the final boss. However, if they die in the game, they die in real life. Their struggle for survival starts now...<br><br>\n (Source: Crunchyroll)",')}</AppTypography>
      <View style={{gap: 12}} className='flex-row flex-wrap'>
        <GenreItem/>
        <GenreItem/>
        <GenreItem/>
        <GenreItem/>
      </View>
    </View>
  );
};

export default Description;