import React, { useState } from 'react';
import './Tasks.css';

export default function Tasks({ title, subtitle, done, tasks }) {


    const [nbTasks, setTasks] = useState(4);

    const taskList = tasks.map((task, index) =>
        <li key={index} className="text item" style={done ? { textDecoration: 'line-through' } : {}}>
            <input type={done ? 'radio' : 'checkbox'} />{task}
        </li>
    );

    return (
        <div>
            <h3 className="text title">{title}</h3>
            <p className="text subtitle">{subtitle}</p>
            <small className="text nbTasks">{nbTasks} Tasks are {done ? 'crushed' : 'waiting'}</small>
            <ul style={done ? { listStyle: 'bullet' } : {}}>
                {taskList}
            </ul>
        </div >
    );
} 