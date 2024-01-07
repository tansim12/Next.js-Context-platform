import { AuthContext } from "@/utils/AuthProvider";
import { useContext } from "react";


const useAuthContext = () => {
  const all = useContext(AuthContext);
  return all;
};

export default useAuthContext;
