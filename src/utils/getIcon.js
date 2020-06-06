
const PATH = process.env.PUBLIC_URL;

const icons = {
    /* this in case for <span> */
    // plus: { backgroundImage: 'url("/images/plus.svg")' },

    plus: PATH + '/images/plus.svg',
    acHome: PATH + "/images/ac-home.svg",
    inHome: PATH + "/images/in-home.svg",
    acTasks: PATH + "/images/ac-tasks.svg",
    inTasks: PATH + "/images/in-tasks.svg",
    acDone: PATH + "/images/ac-done.svg",
    inDone: PATH + "/images/in-done.svg",

}

export default icon => icons[icon]; 