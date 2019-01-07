import axios from 'axios'

export const login = (data) => {
    return axios.post('http://laravel-spa-boilerplate.test/api/login', {data})
}