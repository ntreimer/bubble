import React from "react";
import { Link, useHistory } from "react-router-dom";
import LogOutButton from "../LogOutButton/LogOutButton";
import "./Nav.css";
import { useDispatch, useSelector } from "react-redux";

//
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import HomeIcon from "@material-ui/icons/Home";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import CreateIcon from "@material-ui/icons/Create";
import MenuIcon from "@material-ui/icons/Menu";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { AppBar, Typography, Toolbar, IconButton } from "@material-ui/core";

//

function Nav() {
  const user = useSelector((store) => store.user);
  const history = useHistory();
  const dispatch = useDispatch();

  let loginLinkData = {
    path: "/login",
    text: "",
  };

  if (user.id != null) {
    loginLinkData.path = "/user";
    loginLinkData.text = "Home";
  }

  const useStyles = makeStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
  });

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const menuItems = [
    {
      title: "Home",
      icon: <HomeIcon color="primary" />,
      path: "/home",
    },
    {
      title: "Bookmarks",
      icon: <BookmarkIcon color="primary" />,
      path: "/bookmarks",
    },
    {
      title: "Calendar",
      icon: <CalendarTodayIcon color="primary" />,
      path: "/calendar",
    },
    {
      title: "Create Activity",
      icon: <CreateIcon color="primary" />,
      path: "/create",
    },
  ];
  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((text, index) => (
          <ListItem
            button
            key={text.title}
            onClick={() => {
              history.push(text.path);
            }}
          >
            <ListItemIcon>{text.icon}</ListItemIcon>
            <ListItemText primary={text.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
  if (user.id != null) {
    return (
      <div>
        <React.Fragment key={"left"}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Button onClick={toggleDrawer("left", true)}>
                <MenuIcon color="secondary" />
              </Button>
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
              <Typography color="secondary" align="center" variant="h2">
                Bubble
              </Typography>
              <IconButton
                onClick={() => dispatch({ type: "LOGOUT" })}
                edge="end"
                color="secondary"
              >
                <ExitToAppIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
        </React.Fragment>
      </div>
    );
  } else {
    return (
      <>
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography color="secondary" align="center" variant="h2">
              Bubble
            </Typography>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Nav;
