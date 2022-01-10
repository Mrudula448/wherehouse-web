import Loadable from 'react-loadable';
// import Loading from './my-loading-component';
import SignIn from "./Pages/SignIn/SignIn";
export const SignIn = Loadable({
    loader: () => import('./Pages/SignIn/SignIn'),
    loading: null,
});
