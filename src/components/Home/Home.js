import React from 'react';
import './Home.css';

export const Home = ({ title, subtitle }) =>

    <div>
        <h3 className='text title'>{title}</h3>
        <p className='text subtitle'>{subtitle}</p>
        <img className='image' src={process.env.PUBLIC_URL + '/images/1.png'} alt="ilustration image" />
    </div>

