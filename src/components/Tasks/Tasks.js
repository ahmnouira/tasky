import React, { useState } from 'react';
import './Tasks.css';

export default function Tasks() {


    const [nbTasks, setTasks] = useState(4);

    return (
        <div>
            <h3 className="text title">Feeling tasky</h3>
            <p className="text subtitle">It's time to clear some of those tasks !! Don&rsquo;t you think &#63;</p>
            <small className="text nbTasks">{nbTasks} Tasks are waiting</small>
            <ul>
                <li className="text item"><input type="checkbox" />Go to the gym</li>
                <li className="text item"><input type="checkbox" />Prepare the project planiing</li>
                <li className="text item"><input type="checkbox" />Submit annual report</li>
                <li className="text item"><input type="checkbox" />Pick up Tom from the station</li>
            </ul>
        </div>
    );
} 