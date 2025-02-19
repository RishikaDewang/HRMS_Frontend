import { lazy } from 'react';

// project imports
import Loadable from 'ui-component/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/pages/authentication/authentication/Login')));
const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication/Register')));
const Forgot =  Loadable(lazy(() => import('views/pages/authentication/authentication/Forgot')));
const Reset =  Loadable(lazy(() => import('views/pages/authentication/authentication/Reset')));
const ResetSuccess =  Loadable(lazy(() => import('views/pages/authentication/authentication/ResetSuccess')));
const SignupSucess =  Loadable(lazy(() => import('views/pages/authentication/authentication/SignupSuccess')));
const ResetExpire =  Loadable(lazy(()=>import('views/pages/authentication/authentication/ResetExpire')))
const Unauthorized = Loadable(lazy(()=> import('views/pages/authentication/authentication/Unauthorize')))
// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/login',
      element: <AuthLogin3 />
    },
    {
      path: '/register',
      element: <AuthRegister3 />
    },
    {
      path: '/forgot',
      element: <Forgot />
    },
    {
      path: '/reset',
      element: <Reset />
    },
    {
      path: '/resetsuccess',
      element: <ResetSuccess />
    },
    {
      path: '/signupsucess',
      element: <SignupSucess />
    },
    {
      path: '/resestexpire',
      element: <ResetExpire />
    },
    {
      path: '/unauthorized',
      element:<Unauthorized/>
    },
  ]
};

export default AuthenticationRoutes;
