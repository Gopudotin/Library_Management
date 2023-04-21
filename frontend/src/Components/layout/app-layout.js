import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Navigate, Route, Routes } from "react-router-dom";
import { BooksList } from "../books-list/books-list";
import { LoginDialog } from "../login/login-dialog";

export const AppLayout = () => {
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const handleLoginSubmit = (username, password) => {
    console.log(username, password);
    setOpenLoginDialog(false)
  };

  const handleLoginClose = () => {
    setOpenLoginDialog(false);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton sx={{ display: "flex", mr: 1 }}>
              <AdbIcon />
            </IconButton>
            <Link
              to="/"
              style={{ textDecoration: "none", flexGrow: 1, color: "inherit" }}
            >
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: "flex",
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                }}
              >
                Library Management System
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 0 }}>
              <Button
                onClick={() => setOpenLoginDialog(true)}
                sx={{ my: 2, color: "inherit", display: "block" }}
              >
                Login
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Routes>
        <Route path="/books" exact element={<BooksList />} />
        <Route path="*" element=  {<Navigate to="/books" replace />} />
      </Routes>
      <LoginDialog
        open={openLoginDialog}
        handleSubmit={handleLoginSubmit}
        handleClose={handleLoginClose}
      />
    </>
  );
};
