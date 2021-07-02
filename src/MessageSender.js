import React, { useState } from 'react';
import "./MessageSender.css"
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import LiveTvIcon from '@material-ui/icons/LiveTv';

function MessageSender() {

    const[input,setInput] = useState('')
    const [inputURL, setInputURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // some db stuff
    }


    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar />
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="messageSender__input"
                        placeholder={`Got an Idea? Pitch it to others !`}
                    />
                    <input 
                        value={inputURL}
                        onChange={(e) => setInputURL(e.target.value)}
                        type="text"
                        placeholder="Image URL (Optional)"
                    />
                    <button onClick={handleSubmit} type="submit">
                        
                    </button>
                </form>
            </div>


            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <LiveTvIcon style = {{ color: 'brown' }} />
                    <h3>Live Stream</h3>
                </div>
                 <div className="messageSender__option">
                    <VideocamIcon style={{ color: 'brown' }} />
                <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                <h3>Activity</h3>
                </div>


            </div>
        </div>
    )
}

export default MessageSender
