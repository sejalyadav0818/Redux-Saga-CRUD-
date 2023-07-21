import Grid from "@mui/material/Grid";
import { Provider } from "react-redux";
import MyForm from "./components/MyForm";
import MyTable from "./components/MyTable";
import store from "./store";
// const App = () => {
//     return <>
//         <Provider store={store}>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={4} lg={6}>
//                     <MyForm />
//                 </Grid>
//                 <Grid item xs={12} md={8} lg={6}>
//                     <MyTable />
//                 </Grid>
//             </Grid>
//         </Provider>
//     </>
// }
// export default App

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Form", "Table"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const App = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Typography
          variant="h5"
          align="center"
          padding={3}
          bgcolor="white"
          color="black">
          React-Redux-Saga-CRUD
        </Typography>
      </AppBar>
      <br />
      <Provider store={store}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          <Grid item xs={12} md={4} lg={6}>
            <MyForm />
          </Grid>
          <Grid item xs={12} md={8} lg={6}>
            <MyTable />
          </Grid>
        </Grid>
      </Provider>
    </>
  );
};
export default App;
