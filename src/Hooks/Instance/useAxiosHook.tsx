import axios from "axios";
import { useEffect } from "react";
import toast from "react-hot-toast";

import useAuthContext from "../AuthContextHooks/useAuthContext";
import { useRouter } from "next/navigation";

const instance = axios.create({
  baseURL: process.env.VITE_LIVE_URL,
  withCredentials: true,
});

const useAxiosHook = () => {
  const authContext = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        console.log(err);
        if (err.response.status === 401 || err.response.status === 403) {
          if (authContext && authContext?.logOut) {
            authContext?.logOut().then(() => {
              toast.error("logout");
              router.push("/login");
            });
          }
        }
      }
    );
  }, [authContext, router]);

  return instance;
};

export default useAxiosHook;
