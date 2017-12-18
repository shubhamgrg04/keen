export default function(state = {isLoggedIn: false}, action){
    switch(action.type){
        case 'LOGIN_USER' :
            return {isLoggedIn: true, user: action.user};
            break;
    }
    return state;
}