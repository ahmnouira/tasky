import React, { useState, useEffect } from 'react';
import { getTasks, editTask } from '../../service/taskService';
import './Done.css';

export default function Done() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        //checked=true here 
        getTasks(true).then(api => {
            setTasks(api.tasks);
            setLoading(false);

            /* this is to add visual effect to checked boxes */
            let checkboxes = document.getElementsByTagName(`input`);
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = true;

            }

        });

        return () => {
            setTasks([]);
            setLoading(true);
        }
    }, []);


    const toogleTask = (taskId) => {

        setTimeout(() => {
            document.getElementById(`checkbox-${taskId}`).checked = true;
            let updatedList = tasks.filter(task => taskId !== task._id);
            setTasks(updatedList);
            editTask(taskId).then(api => {
                //console.log(api);
            });

        }, 300);

    }

    const taskList = tasks.map((task, i) => {

        // taskItem compoenet
        const { _id: id, label } = task;

        return (
            <li key={i} className="text item" style={{ textDecoration: 'line-through' }}>
                <input id={`checkbox-${id}`} type='checkbox' onChange={() => toogleTask(id)} />{label}
            </li>
        );
    }).reverse();

    return (
        <>
            {loading && (
                <p style={{}} className="text">Loading...</p>
            )}
            {!loading && (
                <div>
                    <h3 className="text title">Yey !! we’re rockin’</h3>
                    <p className="text subtitle">We did one hell of a job right there !! Bravo six, going dark.</p>
                    <small className="text nb-tasks">{tasks.length} Tasks are crushed</small>
                    <ul style={{}}>
                        {taskList}
                    </ul>
                </div>
            )}
        </>
    );
} 