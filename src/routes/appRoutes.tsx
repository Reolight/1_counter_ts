import App from "../App";
import { MstProvider } from "@stores/mobx";
import { ReduxProvider, useAppSelector } from "@stores/redux";
import { ReduxSagaProvider } from "@stores/saga";
import { RouteObject } from "react-router-dom";
import { lazy } from "react";
import { useMst } from "@stores/mobx";

const NotFound = lazy(() => import("@views/NotFound"));
const LoginContainer = lazy(() => import("@containers/LoginContainer"));
const LoginMstContainer = lazy(() => import("@containers/LoginMstContainer"));
const LoginReduxContainer = lazy(
  () => import("@containers/LoginReduxContainer")
);
const GetActivitySaga = lazy(() => import("@views/Activity"));
const LoginFormik = lazy(() => import("@views/Login/LoginFormik"));
const LoginSuccessful = lazy(() => import("@views/LoginSuccessful"));
const About = lazy(() => import("@views/About"));
const CounterOfCounters = lazy(() => import("@containers/CounterOfCounters"));

// const except = ["/"];

/**
 * Определения роутов в приложении
 */
export const appRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "counters",
        element: <CounterOfCounters />,
      },
      {
        path: "login",
        element: <LoginContainer />,
      },
      {
        path: "login-redux",
        element: (
          <ReduxProvider>
            <LoginReduxContainer />
          </ReduxProvider>
        ),
      },
      {
        path: "login-redux/success",
        element: (
          <ReduxProvider>
            <LoginSuccessful
              dataReceiver={() => useAppSelector((store) => store.loginReducer)}
            />
          </ReduxProvider>
        ),
      },
      {
        path: "login-formik",
        element: (
          <ReduxProvider>
            <LoginFormik />
          </ReduxProvider>
        ),
      },
      {
        path: "login-formik/success",
        element: (
          <ReduxProvider>
            <LoginSuccessful
              dataReceiver={() => useAppSelector((store) => store.loginReducer)}
            />
          </ReduxProvider>
        ),
      },
      {
        path: "get-activity-saga",
        element: (
          <ReduxSagaProvider>
            <GetActivitySaga />
          </ReduxSagaProvider>
        ),
      },
      {
        path: "login-mst",
        element: (
          <MstProvider>
            <LoginMstContainer />
          </MstProvider>
        ),
      },
      {
        path: "login-mst/success",
        element: (
          <MstProvider>
            <LoginSuccessful dataReceiver={() => useMst()} />
          </MstProvider>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

// function SuspenseWrapper(props: { children?: React.ReactNode }) {
//   return <Suspense fallback={<Loading />}>{props?.children}</Suspense>;
// }
// 
// export function getDefinedRoutes(): RouteObject[] {
//   appRoutes
//     .filter((route) => !except.includes(route.path!))
//     .forEach((route) => {
//       route.element = <SuspenseWrapper children={route.element} />;
//     });
// 
//   return appRoutes;
// }
