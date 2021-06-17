import React, {useState, useEffect} from 'react'
import './SidebarChat.css'
// material UI imports
import { Avatar } from '@material-ui/core';


function SidebarChat({addNewChat}) {
    const [seed, setSeed] = useState('');
    // loads again everytime a component is called, since its initialised with a blank array.

    const createChat = () => {
        const roomName = prompt("Please enter name for chat");
        if (roomName){
            //database stuff
        }
    }

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000));
    }, []);

    return !addNewChat ? (
        <div className='sidebarChat'>
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebarChat__info">
                <h2>Room Name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    ):(
        <div 
        onClick={createChat}
        className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    );
}

export default SidebarChat