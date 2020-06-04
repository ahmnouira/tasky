import React, { useState } from 'react';
import './App.css';
import getIcon from './utils/getIcon';
import Home from './components/Home';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';
import Done from './components/Done';

function App() {

  const [tab, setTab] = useState('home');


  return (
    <>
      <header>

        <div className="top_header">

          <a href="#" className="logo">
            <span className="logo_img"></span>
            <span className="logo_text">Tasky</span>
          </a>

          <nav>
            <ul className="nav">
              <li><button className={tab === 'home' ? 'active' : ''} type="button" onClick={() => setTab('home')}>
                <span className="icon" style={tab === 'home' ? getIcon('acHome') : getIcon('inHome')}></span>
                <span className="btn_text">Home</span>
              </button></li>

              <li><button className={tab === 'tasks' ? 'active' : ''} type="button" onClick={() => setTab('tasks')}>
                <span className="icon" style={tab === 'tasks' ? getIcon('acTasks') : getIcon('inTasks')}></span>
                <span className="btn_text">MyTasks</span></button></li>
              <li><button className={tab === 'done' ? 'active' : ''} type="button" onClick={() => setTab('done')}>
                <span className="icon" style={tab === 'done' ? getIcon('acDone') : getIcon('inDone')}></span>
                <span className="btn_text">
                  Done</span></button>
              </li>
            </ul>
          </nav>

          <button className="btn_task" type="button" onClick={() => { }}>
            <span className="icon" style={getIcon('plus')}></span>
            <span className="btn_task_text">Create new
        task</span></button>

        </div>
      </header>

      <div className="container">
        {tab === 'tasks' ? <Tasks /> : tab === 'done' ? <Done /> : <Home />}
      </div>

    </>
  )

}

export default App;
