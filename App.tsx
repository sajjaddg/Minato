import {StatusBar} from "expo-status-bar";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {HomeScreen} from "./app/home/screens";

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar style='light'/>
      <HomeScreen/>
    </QueryClientProvider>
  )
}
