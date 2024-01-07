import { Box, Button, ButtonGroup } from "@mui/material";

import toast from "react-hot-toast";

import { globalInstance } from "@/Hooks/Instance/globalInstance";
import useAuthContext from "@/Hooks/AuthContextHooks/useAuthContext";
import Link from "next/link";
import useCurrentRole from "@/Hooks/UserHooks/useCurrentRole";

const LogOutAndDashboard = () => {
  const authContext = useAuthContext();
  const { currentRole } = useCurrentRole();
  const handleLogout = () => {
    if (authContext && authContext?.logOut) {
      
      authContext?.logOut().then(async () => {
        try {
          const res = await globalInstance.post(
            "/logout",
            {},
            {
              withCredentials: true,
            }
          );
          const fetchData = await res.data;
          if (fetchData.success) {
            toast.success("Logout successfully");
          }
        } catch (error) {
          console.error(error);
        }
      });
    }
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          "& > *": {
            m: 1,
          },
        }}
      >
        <ButtonGroup
          orientation="vertical"
          aria-label="vertical contained button group"
          variant="text"
        >
          {currentRole?.currentRole === "user" && (
            <Link href={"/dashboard/myContest"}>
              <Button>Dashboard</Button>
            </Link>
          )}



          {currentRole?.currentRole === "creator" && (
            <Link href={"/dashboard/addContest"}>
              <Button>Dashboard</Button>
            </Link>
          )}
          {currentRole?.currentRole === "admin" && (
            <Link href={"/dashboard/manageUsers"}>
              <Button>Dashboard</Button>
            </Link>
          )}
          ,<Button onClick={handleLogout}>Logout</Button>,
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default LogOutAndDashboard;
