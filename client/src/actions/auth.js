
import { signin as apiSignIn, signup as apiSignUp } from '../api/index.js';


export const signin = (formData, history) => async (dispatch) => {
    try {

        const { data } = apiSignIn(formData);
        dispatch({ type: 'AUTH', data });
        history.push('/home');
    }
    catch (error) {
        console.log(error);
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {

        const { data } = await apiSignUp(formData);
        dispatch({ type: 'AUTH', data });
        history.push('/home');
    }
    catch (error) {
        console.log(error);
    }
}