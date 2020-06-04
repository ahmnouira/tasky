import React from 'react';
import './NewTask.css';


export default function NewTask() {


    return (
        <div>
            <h3 className="text title">What want to do ?</h3>
            <input placeholder="do someting..." /><br />
            <button className="btn">I'll do it</button>
        </div>
    );

}