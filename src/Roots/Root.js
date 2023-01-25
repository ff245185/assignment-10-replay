import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../shardpage/Footer/Footer';
import Navebar from '../shardpage/Footer/Navebar/Navebar';

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