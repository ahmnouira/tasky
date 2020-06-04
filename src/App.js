import React, { useState } from 'react';
import './App.css';

/* Components */
import Home from './components/Home';
import Tasks from './components/Tasks';
import NewTask from './components/NewTask';

/* helpers */
import getIcon from './utils/getIcon';
import capitalize from './utils/capitalize';
import { TABS, TASKS } from './utils/constants';

function App() {

  const [tab, setTab] = useState('home');
  const [title, setTitle] = useState('Welcome Stranger');
  const [subtitle, setSubtitle] = useState('Any tasks for today ?');


  const createTabs = TABS.map((t, index) =>
    <li key={index}><button className={tab === t.name ? 'active' : ''} type="button" onClick={() => setStatsFor(t.name)}>
      <span className="icon" style={tab === t.name ? getIcon(t.activeIcon) : getIcon(t.inactiveIcon)}></span>
      <span className="btn_text">{capitalize(t.name)}</span>
    </button></li>
  );

  const setStatsFor = (tab) => {

    switch (tab) {

      case 'tasks':
        setTab('tasks');
        setTitle('Feeling tasky');
        setSubtitle(`It's time to clear some of those tasks !! Don\`t you think ?`);
        break;

      case 'done':
        setTab('done');
        setTitle("Yey!! we're rockin`");
        setSubtitle(`We did one hell of a job right there ! Bravo six, going dark.`);
        break;

      default:
        setTab('home');
        setTitle('Welcome Stranger');
        setSubtitle("Any tasks for today ?");
    }

  }

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
              {createTabs}
            </ul>
          </nav>

          <button className="btn_task" type="button" onClick={() => { }}>
            <span className="icon" style={getIcon('plus')}></span>
            <span className="btn_task_text">Create new task</span>
          </button>

        </div>
      </header>

      <div className="container">
        {tab === 'home' ? <Home title={title} subtitle={subtitle} /> : <Tasks done={tab === 'done' ? true : false} title={title} subtitle={subtitle} tasks={TASKS} />}
      </div>
    </>
  )

}

export default App;
