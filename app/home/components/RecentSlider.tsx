import type {FC} from "react";
import PagerView from 'react-native-pager-view';
import {RecentAnime} from "../types/homeApiType";
import RecentItem from "./recent/RecentItem";
import {View} from "react-native";
import AppDivider from "../../../components/AppDivider";

type RecentSliderPops = {
  data: RecentAnime[],
  loading: boolean
}
const RecentSlider: FC<RecentSliderPops> = ({data, loading}) => {
  return (
    <View className='h-[380px]'>
      {
        loading ? null :
          <PagerView className='h-full'>
            {data.map(it =>
                <RecentItem data={it} key={it.id}/>
            )}
          </PagerView>
      }
    </View>
  );
};

export default RecentSlider;