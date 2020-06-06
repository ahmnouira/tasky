import React, { useState, useEffect } from 'react';
import { getTasks, editTask } from '../../service/taskService';
import './MyTasks.css';

export default function MyTasks() {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        // load not checked tasks
        getTasks().then(api => {
            // console.log(api);
            setTasks(api.tasks);
            setLoading(false);
        });

        return () => {
            setTasks([]);
            setLoading(false);

        }

    }, []);

    const toogleTask = (taskId) => {

        // after waiting 300 ms to see the visual effect of checkbox effect 
        setTimeout(() => {
            document.getElementById(`checkbox-${taskId}`).checked = false;
            let updatedList = tasks.filter(task => taskId !== task._id);
            setTasks(updatedList);
            editTask(taskId).then(api => {
                //console.log(api);
            });

        }, 300);

    }

    const taskList = tasks.map((task, index) => {

        const { _id: id, label } = task;

        return (
            <li key={index} className="text item" style={{}}>
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
                    <h3 className="text title">Feeling tasky</h3>
                    <p className="text subtitle">It’s time to clear some of those tasks !! Don’t you think ?</p>
                    <small className="text nb-tasks">{tasks.length} Tasks are waiting</small>
                    <ul style={{}}>
                        {taskList}
                    </ul>
                </div>
            )}
        </>
    );
} 