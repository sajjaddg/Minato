import axios from "axios";

export const useApi =
  axios.create(
    {
      baseURL: 'https://anime-api-tau-taupe.vercel.app/meta/anilist',
      timeout: 3000,
      headers: {
        'X-Custom-Header': 'foobar'
      }
    }
  )
