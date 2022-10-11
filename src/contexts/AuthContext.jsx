import axios from "axios";

export const authToLogin = async (username, password) => {
    const data = await axios.post(`${import.meta.env.VITE_API}/auth/login`, {
        username: username,
        password: password
    })
    .then((res) => res.data)

    return data
};
