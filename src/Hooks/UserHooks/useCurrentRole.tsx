import { useQuery } from "@tanstack/react-query";
import useAxiosHook from "../Instance/useAxiosHook";
import useAuthContext from "../AuthContextHooks/useAuthContext";



const useCurrentRole = () => {
    const instance = useAxiosHook()
    
    const authContext= useAuthContext()
  const { data:currentRole , isLoading } = useQuery({
    queryKey: ["currentUserRole"],
    enabled: !authContext?.userLoading && !!authContext?.user?.email,
    queryFn: async () => {
      const res = await instance.get(`/currentRole/${authContext?.user?.email}`);
      const fetchData = await res.data;
      return fetchData;
    },
  });
  return { currentRole  , isLoading};
};

export default useCurrentRole;

