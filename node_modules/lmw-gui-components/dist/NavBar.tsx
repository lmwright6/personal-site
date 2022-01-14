import * as React from 'react';
import "./NavBar.css"
import { Link } from "react-router-dom";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/icons-material/Menu'
import Paper from '@mui/material/Paper';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

export type NavBarProps = {
  name: string,
  links: RouteObj[],
  backgroundColor: string,
  fontColor: string
}
export interface RouteObj {
  title: string;
  path: string;

}

// Class counter example for React, but using Watchables (which is overkill here, but hey it's an example!)


function NavBar({ name, links, backgroundColor, fontColor }: NavBarProps) {

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (

    <header className="navigation" style={{ backgroundColor: backgroundColor }}>
      <div className="left">
        <a style={{ color: fontColor }}>{name}</a>
      </div>
      <div className="right">
        <div>
          <Button startIcon={<Menu sx={{fontSize: "30px !important", color: fontColor, marginRight:"-11px"}}/>} aria-describedby={id}  onClick={handleClick}></Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Paper elevation={6}>
              <MenuList style={{}}>
                {links.map((linkObj) => {
                  return (
                    <MenuItem>
                      <Link className="link-items" style={{ color: fontColor }} to={linkObj.path}>{linkObj.title}</Link>
                    </MenuItem>
                  )
                })}
              </MenuList>
            </Paper>
          </Popover>
        </div>

      </div>
    </header>
  );

}

export default NavBar;

