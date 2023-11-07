// App.tsx
import React, { useState } from "react";
import { Typography, TextField, Grid, Button, Link } from "@mui/material";
import Switch from "@mui/material/Switch";
import "./App.css";
import logo from "./images/light-logo.png";
import Signin from "./pages/Signin.tsx";
import bgImage from "./images/darkBG.png";
import ForgotPass from "./pages/ForgotPass.tsx";
//===================================================================================================================//

interface Label {
  inputProps: { "aria-label": string };
}

//===================================================================================================================//
function App() {
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const [showForgotComponent, setShowForgotComponent] =
    useState<boolean>(false);
  const [showSigninComponent, setShowSigninComponent] =
    useState<boolean>(false);

  let label: Label = { inputProps: { "aria-label": "Size switch demo" } };
  const popupStyle: React.CSSProperties = {
    backgroundImage: isSwitchOn ? `url(${bgImage})` : "gray",
    transition: "background-color 0.5s",
  };

  let textFieldStyle: React.CSSProperties = {
    backgroundColor: "white",
    marginTop: "10px",
    width: "400px",
    borderRadius: "20px",
  };

  const handleForgotLinkClick: () => void = () => {
    setShowForgotComponent(true);
  };

  const handleLoginLinkClick: () => void = () => {
    setShowForgotComponent(false);
  };

  const handleSigninLinkClick: () => void = () => {
    setShowForgotComponent(false);
    setShowSigninComponent(true);
  };

  const handleLogout = () => {
    setShowSigninComponent(false);
  };

  return (
    <div className="App" style={popupStyle}>
      {showForgotComponent ? (
        <ForgotPass onLogin={handleLoginLinkClick} />
      ) : showSigninComponent ? (
        <Signin onLogout={handleLogout} />
      ) : (
        <Grid container>
          <img
            style={{ width: "200px", marginLeft: "50px", padding: "10px" }}
            src={logo}
            alt="logo"
          />
          <Typography style={{ marginLeft: "60px", padding: "10px" }}>
            Sign in to your account
          </Typography>

          <TextField
            id="filled-basic"
            label="Enter your email..."
            variant="filled"
            sx={{
              backgroundColor: "white",
              marginTop: "10px",
              width: "400px",
              borderRadius: "20px",
            }}
          />
          <div
            style={{ marginLeft: "260px", marginTop: "10px", fontSize: "14px" }}
          >
            <Link
              style={{ color: "white", cursor: "pointer" }}
              onClick={handleForgotLinkClick}
            >
              Forgot?
            </Link>
          </div>
          <TextField
            label="Enter your password..."
            id="filled-basic"
            variant="filled"
            style={textFieldStyle}
          />

          <Grid style={{ display: "flex", marginTop: "25px" }}>
            <Typography style={{ marginTop: "10px", fontSize: "14px" }}>
              No Account?
            </Typography>
            <Link
              style={{
                color: "white",
                marginLeft: "15px",
                marginTop: "10px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Sign Up
            </Link>
            <Button
              onClick={handleSigninLinkClick}
              style={{
                backgroundColor: "white",
                width: "130px",
                height: "50px",
                marginLeft: "40px",
                borderRadius: "20px",
                fontWeight: "bold",
                color: "rgb(100, 64, 189)",
              }}
            >
              Sign In
            </Button>
          </Grid>
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "30px",
            }}
          >
            <Typography>Dark Theme</Typography>
            <Switch
              {...label}
              color="default"
              checked={isSwitchOn}
              onChange={() => setIsSwitchOn(!isSwitchOn)}
            />
          </Grid>
        </Grid>
      )}
    </div>
  );
}

export default App;
