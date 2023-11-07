import React from "react";
import logo from "./images/light-logo.png";
import logo1 from "./images/light.png";
import folder from "./images/uploadIconLight.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Button, Grid, Typography } from "@mui/material";
// Define the prop types or interface for the Signin component
interface SigninProps {
  onLogout: () => void; // This defines the onLogout prop
}

function  Signin(props: SigninProps) {
  return (
    <div>
      {" "}
      <Grid style={{ marginLeft: "5Opx" }}>
        <img style={{ width: "200px", height: "30px" }} src={logo} alt="logo" />
        <SettingsOutlinedIcon style={{ margin: "5px", marginLeft: "20px" }} />
      </Grid>
      <Typography style={{ padding: "10px" }}>Ready when you are</Typography>
      <Grid style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          style={{
            backgroundColor: "rgb(100, 64, 189)",
            color: "white",
            width: "150px",
            borderRadius: "20px",
          }}
        >
          SESSION{" "}
        </Button>
        <Button
          style={{
            backgroundColor: "rgb(100, 64, 189)",
        
            color: "white",
            width: "150px",
            borderRadius: "20px",
          }}
        >
          PREVIEW
        </Button>
      </Grid>
      
      <Grid>
      <Grid
  style={{
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
    marginLeft: "60px",
    maxHeight:"195px"
  }}
>
  <Button
    style={{
      background: "rgb(255, 255, 255)",
      width: "150px",
      height: "150px",
      transform: "rotate(45deg)",
      borderRadius: "20px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s cubic-bezier(0, 0, 0.5, 1) 0s",
      overflow: "hidden",
      position: "relative",
    
    }}
   
  >
    <div style={{ transform: "rotate(-45deg)" }}>
      <img
        style={{
          marginTop: "auto",
          marginBottom: "auto",
          height: "60px",
        }}
        src={logo1}
        alt="logo"
      />
      <span
        style={{
          fontSize: "20px",
          textTransform: "uppercase",
          color: "rgb(100, 64, 189)",
          marginTop: "10px",
        }}
      >
        Firac
      </span>
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          bottom: "0",
          zIndex: "-1",
          background:
            "radial-gradient(circle, rgba(255, 255, 255, 0.5), transparent 20%)",
        }}
      />
    </div>
  </Button>
  <img
    style={{
      height: "60px",
      marginBottom: "200px",
      marginLeft: "20px",
      marginTop: "100px",
  
    }}
    src={folder}
    alt="logo"
  />
</Grid>
<Grid style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
<Button
    style={{
      backgroundColor: " rgb(196 181 253)",

      color: "white",
      width: "300px",
      borderRadius: "20px",
      marginBottom: "10px", 
    }}
  >
    Export
  </Button>
  <Button
    style={{
      color: "white",
      width: "300px",
     
    }}
    onClick={props.onLogout}
  >
    LOGOUT
  </Button>
</Grid>
</Grid>




    
    </div>
  );
}

export default Signin;
