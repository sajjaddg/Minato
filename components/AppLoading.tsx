import React from 'react';
import {ActivityIndicator, View} from "react-native";

const AppLoading = () => {
  return (
    <View
      className='flex-1 bg-background-dark'
      style={{justifyContent: 'center', alignItems: 'center'}}
    >
      <ActivityIndicator size='large' color="#e7073a"/>
    </View>
  );
};

export default AppLoading;