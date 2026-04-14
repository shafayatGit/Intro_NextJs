import { cookies } from "next/headers";

export const userService = {
  getSession: async function () {
    //we cant use async await in the Client component
    try {
      const cookieStore = await cookies();
      const res = await fetch("http://localhost:8000/api/auth/get-session", {
        headers: {
          cookie: cookieStore.toString(), //map take string akare pathaye dey
        },
        cache: "no-store", // We dont want to cache the user data
      });
      const session = await res.json();
      if (!session) {
        return { data: null, error: { message: "Session not found." } };
      }
      return { data: session, error: null }; //must have to return
    } catch (error) {
      console.log(error);
      return { data: null, error: { message: "Something Went Wrong" } };
    }
  },
};
