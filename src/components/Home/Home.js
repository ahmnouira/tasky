import React from 'react';
import './Home.css';

export const Home = () =>

    <div>
        <h3 className='text title'>Welcome Stranger</h3>
        <p className='text subtitle'>Any tasks for today ?</p>
        <img className='image' src={process.env.PUBLIC_URL + '/images/1.png'} alt="" />
    </div>

