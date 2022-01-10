let data = {
    isLogin:true,
    email:null,
    name:null,
    password:null,
    mobile:null
};

const User = (state =data,action) =>{
    switch (action.type) {
        case 'LOGIN':
            console.log(action.payload)
            state = {...action.payload};
            localStorage.setItem("login", JSON.stringify(state));
             break;
        case 'LOGOUT':
            state = {isLogin: false};
            localStorage.removeItem("login");
            localStorage.removeItem("logdetails");
            break;

        default:
            break;
    }
    return state;

}
export default User
