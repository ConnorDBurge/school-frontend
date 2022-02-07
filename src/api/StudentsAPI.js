const BASE_URL = 'https://school-backend-v1.herokuapp.com/school/students/'

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
    const filter = filters ? `?filters=${filters}` : '';
    const data = await tryFetch(BASE_URL + filter);
    return data
}

export default {
    fetchStudents
}