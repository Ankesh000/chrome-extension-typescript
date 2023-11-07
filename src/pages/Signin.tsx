import React from "react";
import logo from "../images/light-logo.png";
import logo1 from "../images/light.png";
import folder from "../images/uploadIconLight.png";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { Button, Grid, Typography } from "@mui/material";

//====================================================================================================================//

// Define the prop types or interface for the Signin component
interface SigninProps {
  onLogout: () => void; // This defines the onLogout prop
}

//====================================================================================================================//

function Signin(props: SigninProps) {
  return (
    <div>
      {" "}
      <Grid sx={{ marginLeft: "5Opx" }}>
        <img style={{ width: "200px", height: "30px" }} src={logo} alt="logo" />
        <SettingsOutlinedIcon style={{ margin: "5px", marginLeft: "20px" }} />
      </Grid>
      <Typography sx={{ padding: "10px" }}>Ready when you are</Typography>
      <Grid sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Button
          sx={{
            "&:hover": {
              background: "rgb(100, 64, 189)",
              cursor: "pointer",
            },
            backgroundColor: "rgb(100, 64, 189)",
            color: "white",
            width: "150px",
            borderRadius: "20px",
          }}
        >
          SESSION{" "}
        </Button>
        <Button
          sx={{
            backgroundColor: "rgb(100, 64, 189)",
            "&:hover": {
              background: "rgb(100, 64, 189)",
              cursor: "pointer",
            },
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
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "60px",
            marginLeft: "60px",
            maxHeight: "195px",
          }}
        >
          <Button
            sx={{
              background: "rgb(255, 255, 255)",
              "&:hover": {
                background: "rgb(255, 255, 255)",
                cursor: "pointer",
                boxShadow: 5,
              },
              width: "150px",
              height: "150px",
              transform: "rotate(45deg)",
              borderRadius: "20px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
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
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            sx={{
              backgroundColor: " rgb(196 181 253)",
              color: "white",
              "&:hover": {
                background: "rgb(196 181 253)",
                cursor: "pointer",
              },
              width: "300px",
              borderRadius: "20px",
              marginBottom: "10px",
            }}
          >
            Export
          </Button>
          <Button
            sx={{
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
