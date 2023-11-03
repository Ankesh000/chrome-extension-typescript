// App.tsx
import React, { useState } from "react";
import { Typography, TextField, Grid, Button, Link } from "@mui/material";
import Switch from "@mui/material/Switch";
import "./App.css";
import logo from "./images/light-logo.png";
import Signin from "./Signin.tsx";

//===================================================================================================================//

interface Label {
  inputProps: { "aria-label": string };
}

//===================================================================================================================//
function App() {
  
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(true);
  const [showForgotScreen, setShowForgotScreen] = useState<boolean>(false);
  const [showSigninComponent, setShowSigninComponent] =
    useState<boolean>(false);

  let label: Label = { inputProps: { "aria-label": "Size switch demo" } };
  let popupStyle: React.CSSProperties = {
    backgroundColor: isSwitchOn ? "rgb(100, 64, 189)" : "gray",
    transition: "background-color 0.5s",
  };
  let textFieldStyle: React.CSSProperties = {
    backgroundColor: "white",
    marginTop: "10px",
    width: "400px",
    borderRadius: "20px",
  };

  const handleForgotLinkClick = () => {
    setShowForgotScreen(true);
  };

  const handleLoginLinkClick = () => {
    setShowForgotScreen(false);
    setShowSigninComponent(true);
  };

  return (
    <div className="App" style={popupStyle}>
      {showForgotScreen ? (
        <div>
          <img
            style={{ width: "200px", padding: "10px" }}
            src={logo}
            alt="logo"
          />
          <Typography style={{ padding: "10px" }}>Reset password</Typography>
          <Grid style={{ marginTop: "40px" }}>
            <TextField
              id="filled-basic"
              label="Enter your email..."
              variant="filled"
              style={{
                backgroundColor: "white",
                width: "300px",
                borderRadius: "20px",
                marginTop: "10px",
              }}
            />
            <Button
              style={{
                backgroundColor: "white",
                width: "300px",
                height: "40px",
                marginTop: "20px",
                borderRadius: "20px",
                fontWeight: "bold",
                color: "rgb(100, 64, 189)",
              }}
            >
              Send password reset link
            </Button>
            <Typography style={{ marginTop: "20px" }}>
              or return back to {"  "}
              <Link
                onClick={handleLoginLinkClick}
                style={{ color: "white", cursor: "pointer" }}
              >
                Log in
              </Link>
            </Typography>
          </Grid>
        </div>
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
          {showSigninComponent && <Signin />}
          <TextField
            id="filled-basic"
            label="Enter your email..."
            variant="filled"
            style={textFieldStyle}
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
