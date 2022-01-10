import axios from 'axios';
import Store from '../Store';
import {ReducerTypes,Basic, AlertTypes} from '../Assets/Constants';
import CryptoJS from 'crypto-js';

axios.interceptors.request.use(
    config => {
        Store.dispatch({type: ReducerTypes.LOADER.toString(), payload: true});
        let encryptedData = typeof config.data === 'object' ? {...config.data}  : config.data;
        console.log(config.data,process.env.REACT_APP_ENVIRONMENT,Basic.PROD)
        if(process.env.REACT_APP_ENVIRONMENT === Basic.PROD){
            encryptedData = typeof config.data === 'object' ? JSON.stringify(config.data) : config.data;
            const parseBase64Key = CryptoJS.enc.Base64.parse(process.env.REACT_APP_ENCRYPTION_KEY)
            encryptedData = CryptoJS.AES.encrypt(encryptedData,parseBase64Key,{mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7}).toString();
        }
        return {...config,data:encryptedData};
    },
    error => {
        console.log(error)
        Store.dispatch({type: ReducerTypes.LOADER.toString(), payload: false});
        Store.dispatch({
            type: ReducerTypes.SHOW_ALERT.toString(), payload: {
                showAlert: true,
                message: `${error.message}`,
                type: AlertTypes.ERROR_ALERT_TYPE
            }
        });
        return Promise.reject(error);
    });
axios.interceptors.response.use(
    async (response) => {
        if(process.env.REACT_APP_ENVIRONMENT === Basic.PROD){
            const parseBase64Key = CryptoJS.enc.Base64.parse(process.env.REACT_APP_DECRYPTION_KEY)
            response.data = CryptoJS.AES.decrypt(response.data,parseBase64Key,{mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
        }
        Store.dispatch({type: ReducerTypes.LOADER.toString(), payload: false});

        return response.data;
    },
    error => {
        Store.dispatch({type: ReducerTypes.LOADER.toString(), payload: false});
        Store.dispatch({
            type: ReducerTypes.SHOW_ALERT.toString(), payload: {
                showAlert: true,
                message: `${error.message}`,
                type: AlertTypes.ERROR_ALERT_TYPE
            }
        });
        return Promise.reject(error);
    });


export const Service = async () => {

}
