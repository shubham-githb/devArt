import React from 'react'
import PageviewIcon from '@material-ui/icons/Pageview';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCirceIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import "./Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEj-QBjQ0ss9VXNvSuHh2oACrWoCqjgJ7qMg&usqp=CAU"
                    alt=""
                />

                <div className="header__input">
                    <PageviewIcon/>
                    <input placeholder = 'Search Developers' type="text"/>
                </div>
            </div>

            

            <div className="header__middle"> 
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large"/>
                </div>
                <div className="header__option ">
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                 <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                 <SupervisedUserCirceIcon fontSize="large" />
                </div>

            </div>


            <div className="header__right"></div>
                <div className="header__info">
                    <Avatar/>
                    <h4>Guest User</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                    <IconButton>
                <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                <ExpandMoreIcon />
                </IconButton>
            
        </div>
    )
}

export default Header
