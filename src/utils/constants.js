import Tab from "../models/Tab"

/** dumpy tasks data  **/
export const TASKS = [
    'Go to the gym',
    'Prepare the project planiing',
    'Submit annual report',
    'Pick up Tom from the station'

]

export const TABS = [

    new Tab('Home', 'acHome', 'inHome'),
    new Tab('My Tasks', 'acTasks', 'inTasks'),
    new Tab('Done', 'acDone', 'inDone')

]