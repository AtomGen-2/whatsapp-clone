import React, {useState, useEffect} from 'react'
import './Chat.css'
import { Avatar } from '@material-ui/core';
import { useParams } from "react-router-dom";
import {useStateValue} from "./StateProvider";

// material imports
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
// firebase
import db from "./firebase";
import firebase from "firebase";

function Chat() {
    const [seed, setSeed] = useState('');
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{user}, dispatch] = useStateValue();

    useEffect(()=>{
        if(roomId){
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => (
                setRoomName(snapshot.data().name)
            ))
            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy("timestamp", "asc")
            .onSnapshot((snapshot)=>
                setMessages(snapshot.docs.map((doc) => doc.data()))
            );
        }
    }, [roomId])
    // console.log(input);
    const sendMessage = (e) => {
        // this will prevent intermediate letters.
        e.preventDefault();
        console.log("You typed >>>", input);

        db.collection('rooms').doc(roomId).collection('messages').add({
            message:input,
            name: user.displayName,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
        console.log(user.displayName);
    }

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    },[roomId]);
    return (
        <div className='chat'>
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
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
                {messages.map((message) => (
                   <p className={`chat__message 
                   ${message.name === user.displayName 
                   && "chat__green"
                   }`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timingStyle">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}
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
// 