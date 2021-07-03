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

            <Post/>
            <Post/>
            <Post/> 
           
        </div>
    )
}

export default Feed
