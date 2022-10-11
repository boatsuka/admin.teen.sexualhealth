import axios from "axios";

export const getTeacherById = async (teacherId) => {
    const data = await axios.get(`${import.meta.env.VITE_API}/teacher/${teacherId}`)
    .then((res) => res.data)

    return data
};