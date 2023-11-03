// ForgotPassword.tsx
import logo from "./images/light-logo.png";
import React, { useState } from "react";
import { Typography, TextField, Grid, Button, Link } from "@mui/material";
import App from "./App.tsx";
function ForgotPassword() {
  const [displayedLogin, setDisplayedLogin] = useState<React.ReactNode | null>(
    false
  );
  const displayLogin = () => {
    setDisplayedLogin(true);
  };

  return (
    <>
      {displayedLogin ? (
        <App />
      ) : (
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
                onClick={displayLogin}
                style={{ color: "white", cursor: "pointer" }}
              >
                Log in
              </Link>
            </Typography>
          </Grid>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;
