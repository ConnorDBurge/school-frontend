const PRODUCTION_URL = 'https://school-backend-v1.herokuapp.com/school/courses/'
const DEVELOPMENT_URL = 'http://localhost:8000/school/courses/'

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

const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}


const fetchCourses = async (filters = null) => {
    const filter = filters ? `list?filters=${filters}` : 'list';
    const data = await tryFetch(DEVELOPMENT_URL + filter);
    return data
}

const fetchCourse = async (courseId) => {
    const data = await tryFetch(DEVELOPMENT_URL + `detail/${courseId}`);
    return data;
}

const addCourse = (courseObject) => {
    try {
        const csrftoken = getCookie('csrftoken');
        return fetch(DEVELOPMENT_URL + 'create/', {
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            method: "POST",
            body: JSON.stringify(courseObject)
        });
    } catch (err) {
        console.error(err);
    }
}

export default {
    fetchCourses,
    fetchCourse,
    addCourse
}