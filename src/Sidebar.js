import React from 'react'
import SidebarRow from './SidebarRow';
import "./Sidebar.css"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { ExpandMoreOutlined } from '@material-ui/icons';
import VoiceChatOutlinedIcon from '@material-ui/icons/VoiceChatOutlined';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow
        src='https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg'
        title='Shubham'
      />
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Information Center"
      />
            <SidebarRow color='white' Icon={EmojiFlagsIcon} title="Pages" />
            <SidebarRow Icon={PeopleIcon} title="Developers Friends" />
            <SidebarRow Icon={ChatIcon} title="Messenger" />
            <SidebarRow Icon={StorefrontIcon} title="Discover Market" />
            <SidebarRow Icon={VideoLibraryIcon} title="Tutorials" />
            <SidebarRow Icon = {VoiceChatOutlinedIcon} title="Take Interview"/>
            <SidebarRow Icon={ExpandMoreOutlined} title="More" />
         
            
        </div>
    );
}

export default Sidebar
