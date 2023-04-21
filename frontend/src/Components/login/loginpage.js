import { useState } from "react";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { LoginDialog } from "./login-dialog.js";


export default function Loginpage() {
  const [loginOpen, setLoginOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleLoginSubmit = (username, password) => {
    console.log("Username:", username);
    console.log("Password:", password);
    handleLoginClose();
  };

  return (
    <div>

      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Library Management System
            </Typography>
            <Button color="inherit" onClick={handleLoginOpen}>
              Login
            </Button>
          </Toolbar>
        </AppBar>
         
      </div>
      <LoginDialog
        open={loginOpen}
        handleClose={handleLoginClose}
        handleSubmit={handleLoginSubmit}
      />
</div>
      );

}
