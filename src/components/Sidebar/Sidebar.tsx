import React from 'react'
import { navigationMenu } from "./SidebarNavigation"
import { Avatar, Button, Card, Divider, Menu, MenuItem } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Sidebar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Card className="h-screen flex flex-col justify-between py-5">
      <div className="space-y-4 mx-2">
        <div className="">
          <span className="font-bold text-xl ml-2">Y.COM</span>
        </div>
        <div className="">
          {
            navigationMenu.map((item) => {
              return (
                <div className="flex items-center cursor-pointer space-x-3 hover:bg-slate-300 py-4 px-2 rounded-xl">
                  {item.icon}
                  <p className="text-xl">{item.title}</p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <Divider></Divider>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center space-x-3 pl-5">
            <Avatar src="https://yt3.ggpht.com/yti/ANjgQV_bVt4M2io4YPWoUqANZ4zdBOMsMep1BOXm_2PXASFc-g4=s88-c-k-c0x00ffffff-no-rj"></Avatar>
            <div>
              <h1 className="font-bold">nhoclahola</h1>
              <p className="opacity-70">@nhocl</p>
            </div>
          </div>
          <div>
            <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
              <MoreVertIcon></MoreVertIcon>
            </Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default Sidebar