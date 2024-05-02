import { useContext, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { UserContext } from "./UserContext";
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';


export default function Header() {
  const { userInfo, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <AppBar position="static" color="primary" elevation={0} sx={{ width: '100%' }}>
      <Toolbar sx={{ justifyContent: "space-between", py: 1 }}>
        <Typography variant="h5" component={RouterLink} to="/"
          sx={{
            flexGrow: 1,
            color: "inherit",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Semillas Sanas
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          {username ? (
            <>
              <Typography variant="body1" sx={{ fontWeight: "medium", marginRight: 2 }}>
                Buenas, @{username}
              </Typography>
              <Button color="inherit" component={RouterLink} to="/create" sx={{ minWidth: 120 }}>
                Nueva Entrada
              </Button>
              <Button color="inherit" onClick={logout} sx={{ marginRight: -2 }}>
                Desconectarse
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/login">
                Identifícate
              </Button>

              <Button color="inherit" component={RouterLink} to="/register">
                Regístrate
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
