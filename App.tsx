import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, Text, View} from 'react-native';
import AppTypography from "./components/AppTypography";

export default function App() {
  return (
    <SafeAreaView className='bg-[#191B1C] flex-1'>
      <View className="flex-1 items-center">
        <Text className='text-white'>hi my name is sajjad</Text>
        <AppTypography className='text-2xl'>what's up?</AppTypography>
        <AppTypography>AppTypography</AppTypography>
        <StatusBar style="auto"/>
      </View>
    </SafeAreaView>
  );
}
