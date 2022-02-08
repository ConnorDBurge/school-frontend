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

export default {
    fetchStudents,
    fetchStudent
}