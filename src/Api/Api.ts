import axios from 'axios';

const DEFAULT_URL: string = "http://localhost:9000"

export const Auth = {
    login: (email: string, password: string) => {
        return axios.post(`${DEFAULT_URL}/auth/login`, {
            email: email,
            password: password
        })
    },
    register: (email: string, password: string) => {
        return axios.post(`${DEFAULT_URL}/auth/register`, {
            email: email,
            password: password
        })
    },
    restorePassword: (email: string) => {
        return axios.post(`${DEFAULT_URL}/auth/restore`, {
            email: email
        })
    }
}