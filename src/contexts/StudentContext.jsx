import axios from 'axios'

export const getStudentById = async (studentId) => {
    const data = await axios.get(`${import.meta.env.VITE_API}/student/${studentId}`)
    .then((res) => res.data)

    return data
};

export const getStudentScoreById = async (studentId) => {
    const data = await axios.get(`${import.meta.env.VITE_API}/student/score/${studentId}`)
    .then((res) => res.data)

    return data
};

export const postStudentBySurvey = async (studentId, submoduleId, checkedId) => {
    const data = await axios.post(`${import.meta.env.VITE_API}/student/survey/${studentId}/${submoduleId}/${checkedId}`)
    .then((res) => res.data)

    return data
}