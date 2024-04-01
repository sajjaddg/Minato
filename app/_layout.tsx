import {Slot} from 'expo-router';
import {QueryClient} from "@tanstack/react-query/build/modern/index";
import {QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient()
export default function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Slot/>
    </QueryClientProvider>
  )
}