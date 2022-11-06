import axios from "axios";

export const getTeacherById = async (teacherId) => {
    const data = await axios.get(`${import.meta.env.VITE_API}/teacher/${teacherId}`)
    .then((res) => res.data)

    return data
};


export const getUserById = async (userId) => {
    const data = await axios.get(`${import.meta.env.VITE_API}/user/${userId}`)
    .then((res) => res.data)

    return data
}

export const deleteTeacher = async (teacherId) => {
    const data = await axios
    .delete(`${import.meta.env.VITE_API}/teacher/remove-hard/${teacherId}`)
    .then((res) => res.data);

  return data
}