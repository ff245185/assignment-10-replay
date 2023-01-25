import React from 'react';
import { Link } from 'react-router-dom';

const home = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src="https://placeimg.com/260/400/arch" className=" max-w-lg rounded-lg shadow-2xl" alt='/' />
          <div>
             <p className='text-red-600'>welcome</p>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat  ut assumenda excepturi exercitationem quasi. In <br /> deleniti eaque aut repudiandae et a id nisi.</p>
            <div className='flex-1 gap-5'>
            <button className="btn btn-primary"><Link to='/course'>Get start</Link></button>
            <button className="btn btn-primary"><Link to='/aboute'>Lear...</Link></button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default home;