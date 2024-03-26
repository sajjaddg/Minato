import type {FC} from "react";
import {Text, TextProps, TextStyle} from "react-native";
import {useFonts} from "expo-font";

interface Props extends TextProps {
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  style?: TextStyle;
  color?: string,
}

type TypographyVariant = 'BellotaText' | 'PassionOne'
type TypographyWeight = 'bold' | 'regular' | 'light'

const AppTypography: FC<Props> = ({children, style, variant = 'BellotaText', weight = 'regular', color = 'white'}) => {
  //load fonts
  const [fontsLoaded, fontError] = useFonts({
    'PassionOne-Bold': require('../assets/fonts/PassionOne-Bold.ttf'),
    'BellotaText-regular': require('../assets/fonts/BellotaText-Regular.ttf'),
    'BellotaText-bold': require('../assets/fonts/BellotaText-Bold.ttf'),
    'BellotaText-light': require('../assets/fonts/BellotaText-Light.ttf'),
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }
  let fontFamily = "PassionOne-Bold"; // Default font family

  // Determine font family based on variant and weight
  if (variant === "BellotaText") {
    switch (weight) {
      case "bold":
        fontFamily = "BellotaText-bold";
        break;
      case "regular":
        fontFamily = "BellotaText-regular";
        break;
      case "light":
        fontFamily = "BellotaText-light";
        break;
      default:
        break;
    }
  }

  return (
    <Text style={[{color: color, fontFamily: fontFamily}, style]}>
      {children}
    </Text>
  );
};
export default AppTypography