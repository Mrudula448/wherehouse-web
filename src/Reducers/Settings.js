let data = {
    showLoader: false,
    showAlert: false,
    alertMessage: null,
    alertType: '',
    timeOut: null,
    sideNavStatus:false,

};
const Settings = (state = data, action) => {
    switch (action.type) {
        case 'LOADER':
            state = { ...state, showLoader: action.payload };
            break;
        case 'SHOW_ALERT':
            console.log(action.payload);
            state = {
                ...state,
                showAlert: true,
                alertMessage: action.payload.message,
                alertType: action.payload.type,
                timeOut: action.payload.timeOut || null
            };
            break;
        case 'HIDE_ALERT':
            state = {
                ...state, showAlert: false,
                alertMessage: '',
                alertType: '',
                timeOut: null,
            }
            break;
        case 'SET_SIDE_NAV':
            state = {
                ...state, sideNavStatus: action.payload
            }
            break;
        default:
            break;
    }

    return state;
};

export default Settings;
