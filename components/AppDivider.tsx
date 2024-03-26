import {LinearGradient} from "expo-linear-gradient";

const AppDivider = () => {
  return (
    <LinearGradient
      style={{height: 1, width: '100%'}}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['rgba(231, 7, 58, 0)', 'rgba(231, 7, 58, 1)', 'rgba(231, 7, 58, 1)', 'rgba(231, 7, 58, 0)']}/>
  );
};

export default AppDivider;