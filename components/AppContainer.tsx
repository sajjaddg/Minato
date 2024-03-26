import {FC} from "react";
import {SafeAreaView, ViewProps} from "react-native";

const AppContainer: FC<ViewProps> = ({style, children, className, ...props}) => {
  return (
    <SafeAreaView
      style={[{flex: 1}, style]}
      className={`flex-1 ${className}`}
      {...props}
    >
      {children}
    </SafeAreaView>
  );
};

export default AppContainer;