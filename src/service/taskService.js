// const API = "https://autofy-tasky.herokuapp.com";
/* NO NEEDED: the request will be redirected to the proxy due to the CORS issue */

const MY_EAMIL = "ahmnouira@gmail.com";

export const getTasks = async (checked = false) => {

    try {
        const response = await fetch(`api/tasks?checked=${checked}&candidate_email=${MY_EAMIL}`);
        return await response.json();
    } catch (error) {
        // or return obeject {error: error }
        console.error(error);
    }
}

export const postTask = async (label) => {

    try {
        const response = await fetch(`api/task`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:
                JSON.stringify({ candidate_email: MY_EAMIL, label: label })
        });

        return await response.json();

    } catch (error) {
        console.error(error);
    }

}

export const editTask = async (taskId) => {

    try {
        const response = await fetch(`api/check_task/${taskId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return await response.json();

    } catch (error) {
        console.error(error);
    }

}



