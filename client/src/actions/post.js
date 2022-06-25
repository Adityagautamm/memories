import * as api from '../api/index.js';


export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
        console.log('data passed')
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};