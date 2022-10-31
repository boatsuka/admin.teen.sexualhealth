import axios from "axios";


export const getSchool = async () => {
    const data = await axios.get(`${import.meta.env.VITE_API}/school`)
        .then((res) => res.data)
    
    return data
}

export const getSchoolById = async (schoolId) => {
    const data = await axios.get(`${import.meta.env.VITE_API}/school/teacher/${schoolId}`)
    .then((res) => res.data)

    return data
};