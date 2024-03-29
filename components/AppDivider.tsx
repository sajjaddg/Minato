import {LinearGradient} from "expo-linear-gradient";
import {ViewProps} from "react-native";
import {FC} from "react";

type AppDividerProps = {
  style?: ViewProps,
  color?: string
}
const AppDivider: FC<AppDividerProps> = ({style, color = 'rgba(231, 7, 58, 1)'}) => {
  return (
    <LinearGradient
      style={[{height: 1, width: '100%'}, style]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['transparent', color, color, 'transparent']}/>
  );
};

export default AppDivider;