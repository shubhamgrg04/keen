import firebaseApp from '../firebase-config.js';

const firebaseAuth = firebaseApp.auth();
export default function loginUser(values){
    console.log(values);

    return (dispatch) => {
        firebaseAuth.signInWithEmailAndPassword(values.useremail, values.password).then((result) => {
            console.log(result);
            dispatch({
                type: 'LOGIN_USER',
                user: result
            });
        });
    }
}