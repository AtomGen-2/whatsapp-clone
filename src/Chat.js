import React, {useState, useEffect} from 'react'
import './Chat.css'
import { Avatar } from '@material-ui/core';
// material imports
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    // console.log(input);
    const sendMessage = (e) => {
        // this will prevent intermediate letters.
        e.preventDefault();
        console.log("You typed >>>", input)
    }

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[]);
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p className="para">Last seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">
                <p className="chat__message chat___receiver">
                <span className="chat__name">Vedant</span>
                    Hey Guys
                    <span className="chat__timestamp">4:52pm</span>
                </p>
            </div>
            <div className="chat__footer">
                <InsertEmoticonIcon fontSize="large"/>
                <form>
                    <input 
                    value={input}
                    onChange={(e)=> setInput(e.target.value)} 
                    type="text" 
                    placeholder="Type a message"
                    />
                    <button type="submit" onClick={sendMessage}>Send a message!</button>
                </form>
                <MicIcon style={{ fontSize: 100 }}/>
            </div>
        </div>
    )
}

export default Chat
