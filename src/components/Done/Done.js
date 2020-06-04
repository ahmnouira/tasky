import React, { useState } from 'react';
import './Done.css';

export default function Done() {

    const [nbTasks, setTasks] = useState(4);

    return (
        <div>
            <h3 className="text title"> Yey!! we're rockin`</h3>
            <p className="text subtitle">We did one hell of a job right there !! Bravo six, going dark.</p>
            <small className="text nbTasks">{nbTasks} Tasks are curshed</small>
            <ul className="done_list">
                <li className="text item done">Go to the gym</li>
                <li className="text item done">Prepare the project planiing</li>
                <li className="text item done">Submit annual report</li>
                <li className="text item done">Pick up Tom from the station</li>
            </ul>
        </div>
    );

}