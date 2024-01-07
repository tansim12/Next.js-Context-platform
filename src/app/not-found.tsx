"use client"

import Lottie from "lottie-react";
import errorAnimation from "@/assets/errorAnimation.json"


import { Button, Grid } from "@mui/material";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <div>
      <div>
        <Lottie
          style={{width:"100%" , height:"70vh"}}
          animationData={errorAnimation}
          loop={true}
          autoplay={true}
        ></Lottie>
      </div>
      <div className="">
       
         <Grid display={"flex"} justifyContent={"center"} alignItems={"center"}>
         <Link
            href={"/"}
            
          >
           <Button variant="contained">  Back to Homepage</Button>
          </Link>
         </Grid>
        
      </div>
    </div>
  );
};

export default ErrorPage;
