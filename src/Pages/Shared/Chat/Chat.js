import React from 'react';
import { FaFacebookMessenger } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Chat.css';

const Chat = () => {
    return (
        <div>
            <Link to={'/'} className='text-3xl fill-red-700 icon-color instagram'><FaFacebookMessenger></FaFacebookMessenger></Link>
            {/* <Link to={'/'} className='text-3xl icon-color bg-gradient-to-r from-indigo-500 via-purple-500 to-purple-500 bg-clip-text'><FaFacebookMessenger></FaFacebookMessenger></Link> */}
        </div>
    );
};

export default Chat;