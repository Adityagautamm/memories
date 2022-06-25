import axios from 'axios';

//const url = 'http://localhost:8000/posts';
const Api = axios.create({
    baseURL: 'http://localhost:8000'
});

Api.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Autorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})


export const createPost = (post) => Api.post('/posts', post);
export const signin = (formData) => Api.post('/user/signin', formData);
export const signup = (formData) => Api.post('/user/signup', formData);