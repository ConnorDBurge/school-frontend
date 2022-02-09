import Cookie from './cookie';

const PRODUCTION_URL = 'https://school-backend-v1.herokuapp.com/school/students/'
const DEVELOPMENT_URL = 'http://localhost:8000/school/students/'

const tryFetch = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw response.statusText
        }
        const data = await response.json();
        return data
    } catch (err) {
        throw err
    }
}

const fetchStudents = async (filters = null) => {
    const filter = filters ? `list?filters=${filters}` : 'list';
    const data = await tryFetch(DEVELOPMENT_URL + filter);
    return data
}

const fetchStudent = async (studentId) => {
    const data = await tryFetch(DEVELOPMENT_URL + `detail/${studentId}`);
    return data;
}

const addStudent = (studentObject) => {
    try {
        const csrftoken = Cookie.getCookie('csrftoken');
        return fetch(DEVELOPMENT_URL + 'create/', {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            method: "POST",
            body: JSON.stringify(studentObject)
        });
    } catch (err) {
        console.error(err);
    }
}

const deleteStudent = async (studentId) => {
    try {
        const csrftoken = Cookie.getCookie('csrftoken');
        const response = await fetch(DEVELOPMENT_URL + `delete/${studentId}`, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            method: "DELETE"
        });
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err);
    }
}

const enrollStudent = async (studentId, courseId) => {
    try {
        const csrftoken = Cookie.getCookie('csrftoken');
        const response = await fetch(DEVELOPMENT_URL + `enroll/${studentId}/${courseId}/`, {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            method: "POST"
        });
        const data = await response.json()
        return data
    } catch (err) {
        console.error(err);
    }
}

export default {
    fetchStudents,
    fetchStudent,
    addStudent,
    deleteStudent,
    enrollStudent
}