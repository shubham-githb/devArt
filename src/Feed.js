import React from 'react'
import StoryReel from "./StoryReel"
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender/>

            <Post
                
                profilePic="https://www.drewmaring.dev/assets/pictures/drew_fiver_cropped.png"
                message="WHATSSUPP EVERYONE"
                timestamp="TODYA'S DATE"
                username="sshhuubham"
                image='https://kinsta.com/wp-content/uploads/2020/04/code-review-tools.png'
            />
            <Post/>
            <Post/> 
           
        </div>
    )
}

export default Feed
