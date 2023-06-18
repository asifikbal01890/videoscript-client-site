import React from 'react';
import { Outlet } from 'react-router-dom';
import Chat from '../../Pages/Shared/Chat/Chat';
import Footer from '../../Pages/Shared/Footer/Footer';
import NavBar from '../../Pages/Shared/NavBar/NavBar';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className='fixed right-16 bottom-12 z-50'><Chat></Chat></div>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Main;