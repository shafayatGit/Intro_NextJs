import { env } from "../env";

const API_URL = env.APP_URL;

//No dynamic and no cache no-strore : SSG-> Static Site Generation
//{ cache: "no-store" } -> SSR -> Server Side Rendering
//{ next: { revalidate: 60 } } -> ISR -> Incremental Static Regeneration . Mix between static and dynamic. It will cache the data for 60 seconds and after that it will revalidate the data and update the cache. So we can get the benefits of both static and dynamic rendering.

interface ServiceOptions {
  cache?: RequestCache; // RequestCache is a built-in TypeScript type that represents the cache option for the fetch API. It can be "default", "no-store", "reload", "no-cache", "force-cache", or "only-if-cached".
  revalidate?: number;
}

interface BlogBlogParams {
  search?: string;
  isFeatured?: boolean;
}

export const blogService = {
  getBlogPosts: async function (
    params?: BlogBlogParams,
    options?: ServiceOptions,
  ) {
    try {
      //   const res = await fetch(`${API_URL}/posts`,{cache:"no-store"});
      //   const res = await fetch(url.toString(), { next: { revalidate: 60 } }); //ISR (Incremental Static Regeneration) 60 means after 60 seconds it will revalidate the data and update the cache

      //------->>>>>>Best approach:
      const url = new URL(`${API_URL}/posts`);
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append(key, value);
          }
        });
      }

      const config: RequestInit = {}; //We will pass this config to fetch function and we will add the cache and revalidate options to this config object based on the options passed to the function
      if (options?.cache) {
        config.cache = options.cache; //We can set the cache option to "no-store" to disable caching or "force-cache" to force caching or "default" to use the default caching behavior of the browser
      }
      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate }; //We can set the revalidate option to a number in seconds to enable ISR (Incremental Static Regeneration) or we can set it to "force-cache" to force caching or "default" to use the default caching behavior of the browser
      }

      const res = await fetch(url.toString(), config);
      const data = await res.json();

      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
    }
  },

  getBlogPostById: async function (id: string) {
    try {
      const res = await fetch(`${API_URL}/posts/${id}`, {
        cache: "no-store",
      });
      const data = await res.json();
      return { data: data, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
    }
  },
};
