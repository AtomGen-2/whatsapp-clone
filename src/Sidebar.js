import React, {useState, useEffect} from 'react'
import './Sidebar.css'
import SidebarChat from './SidebarChat.js'
// material imports
import { Avatar } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { IconButton } from '@material-ui/core';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
// firebase imports
import db from "./firebase"

function Sidebar() {
    const [rooms, setRooms] = useState([]);

    // having an empty array means that the useEffect will render and form only once, at the first time.
    // firebase takes a snapshop of the database whenever a change is detected, so snapshot is a way of detecting change.
    useEffect(()=>{
        db.collection("rooms")
        .onSnapshot((snapshot)=>setRooms(
            snapshot.docs.map((doc)=>({
            id: doc.id,
            data: doc.data(),
        })
        )
        ));
    }, []);

    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>                    
                </div>
            </div>
            <div className='sidebar__search'>
                <div className="sidebar__searchContainer">
                    <SearchOutlinedIcon/>
                    <input placeholder="Search or start new chat" type="text"/>
                </div>
            </div>
            <div className='sidebar__chats'>
                <SidebarChat addNewChat/>
                {rooms.map((room)=>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar
