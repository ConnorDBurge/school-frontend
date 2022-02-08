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

const fetchCourses = async (filters = null) => {
    const filter = filters ? `list?filters=${filters}` : 'list';
    const data = await tryFetch(PRODUCTION_URL + filter);
    return data
}

const fetchCourse = async (courseId) => {
    const data = await tryFetch(PRODUCTION_URL + `detail/${courseId}`);
    return data;
}

export default {
    fetchCourses,
    fetchCourse
}