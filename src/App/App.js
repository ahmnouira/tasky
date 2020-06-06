import React, { useState, useEffect } from 'react';
import './App.css';

/* Components */
import Home from '../components/Home';
import MyTasks from '../components/MyTasks';
import Done from '../components/Done';
import NewTask from '../components/NewTask';

/* helpers */
import getIcon from '../utils/getIcon';
// import capitalize from '../utils/capitalize';
import { TABS } from '../utils/constants';

/* Api service */
import { postTask } from '../service/taskService';

function App() {

  const [tab, setTab] = useState('Home');
  const [modal, setModal] = useState(false);    // by default the modal is closed;  

  useEffect(() => {

    document.addEventListener('click', handleWindowEvents);
    document.addEventListener('keydown', handleWindowEvents);

    return () => {

      document.removeEventListener('click');
      document.removeEventListener('keydown');
    }

  }, []);


  const handleWindowEvents = (e) => {

    let modal = document.getElementById('modal');

    // when the user type ESC or when he click outside modal
    if (e.keyCode === 27 || e.target === modal) {
      setModal(false);
    }
  }

  const postNewTask = (label) => {

    if (label.length < 5) {
      alert('Cant Add task with 5 characters only!');
      return;
    }

    // this is here NOT inside postTask because I need post request in background
    setModal(false);


    postTask(label).then((api) => {

      alert('Task Added')

      if (tab === 'My Tasks')
        document.location.reload();


    });
  }

  const createTabs = TABS.map((t, index) => {

    const { name, activeIcon, inactiveIcon } = t;

    return (
      <li key={index}><button className={tab === name ? 'active' : ''} type="button" onClick={() => setTab(name)}>
        <img className="icon" src={tab === name ? getIcon(activeIcon) : getIcon(inactiveIcon)} alt="" />
        <span className="btn-text" style={{}}>{name}</span>
      </button></li>
    );
  });

  return (
    <>
      <header>
        <div className="top-header">
          <a href="/" className="logo">
            <span className="logo-img"></span>
            <span className="logo-text">Tasky</span>
          </a>

          <nav>
            <ul className="nav">
              {createTabs}
            </ul>
          </nav>

          <button className="btn-task" type="button" onClick={() => {
            setModal(true);
          }}>
            <img className="icon icon-plus" src={getIcon('plus')} alt="" />
            <span className="btn-task-text">Create new task</span>
          </button>
        </div>
      </header>

      <div className="container">
        {tab === 'My Tasks' ? <MyTasks /> : tab === 'Done' ? <Done /> : <Home />}
      </div>
      <NewTask openClose={modal} handlePost={postNewTask} />
    </>
  )
}

export default App;
