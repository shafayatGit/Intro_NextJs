import { env } from "../env";

const API_URL = env.APP_URL;

//No dynamic and no cache no-strore : SSG-> Static Site Generation
//{ cache: "no-store" } -> SSR -> Server Side Rendering
//{ next: { revalidate: 60 } } -> ISR -> Incremental Static Regeneration . Mix between static and dynamic. It will cache the data for 60 seconds and after that it will revalidate the data and update the cache. So we can get the benefits of both static and dynamic rendering.

export const blogService = {
  getBlogPosts: async function () {
    try {
      //   const res = await fetch(`${API_URL}/posts`,{cache:"no-store"});
      const res = await fetch(`${API_URL}/posts`, { next: { revalidate: 60 } }); //ISR (Incremental Static Regeneration) 60 means after 60 seconds it will revalidate the data and update the cache

      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
    }
  },
};
