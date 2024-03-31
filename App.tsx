import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AnimeDetailScreen from "./app/animeDetail/screens/AnimeDetailScreen";

const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimeDetailScreen/>
    </QueryClientProvider>
  )
}
