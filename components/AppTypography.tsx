import type {FC} from "react";
import {Text, TextProps, TextStyle} from "react-native";
import {useFonts} from "expo-font";

interface Props extends TextProps {
  style?: TextStyle;
  color?: string,
}

const AppTypography: FC<Props> = ({children, style, color = 'white'}) => {
  //load fonts
  const [fontsLoaded, fontError] = useFonts({
    'PassionOne-Bold': require('../assets/fonts/PassionOne-Bold.ttf'),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <Text style={[{color: color, fontFamily: 'PassionOne-Bold'}, style]}>
      {children}
    </Text>
  )
}
export default AppTypography