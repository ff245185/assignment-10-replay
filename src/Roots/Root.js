import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../component/HOME/Footer/Footer';
import Navebar from '../component/HOME/Navebar/Navebar';

const Root = () => {
    return (
        <div>
            <Navebar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;