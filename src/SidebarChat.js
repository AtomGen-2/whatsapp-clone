import React, {useState, useEffect} from 'react'
import './SidebarChat.css'
// material UI imports
import { Avatar } from '@material-ui/core';
// firebase imports
import db from "./firebase"
import { Link } from "react-router-dom";
import firebase from "firebase";


function SidebarChat({addNewChat, id, name}) {
    const [seed, setSeed] = useState('');
    const [messages, setMessages] = useState("");

    useEffect(()=>{
        if (id){
            db.collection('rooms')
            .doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>(
                setMessages(snapshot.docs.map((doc)=>doc.data()))
            ));
        }
    },[id]);
    // loads again everytime a component is called, since its initialised with a blank array.

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName){
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className='sidebarChat'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebarChat__info">
                    <h2>{name}</h2>
                    <p>{messages[0]?.message}</p>
                </div>
            </div>
        </Link>
    ):(
        <div 
        onClick={createChat}
        className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarChat
