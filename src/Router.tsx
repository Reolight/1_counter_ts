import App from "./App";
import AppMst from "./AppMst";
import AppRedux from "./AppRedux";
import AppReduxSaga from "./AppReduxSaga";
import CounterOfCounters from "./containers/CounterOfCounters";
import LoginContainer from "./containers/LoginContainer";
import LoginMstContainer from "./containers/LoginMstContainer";
import LoginReduxContainer from "./containers/LoginReduxContainer";
import About from "./views/About";
import GetActivitySaga from "./views/GetActivitySaga";
import LoginFormik from "./views/LoginFormik";
import LoginSuccessful from "./views/LoginSuccessful";
import LoginSuccessfulMst from "./views/LoginSuccessfulMst";
import NotFound from "./views/NotFound";
import { createHashRouter } from "react-router-dom";

/**
 * Определения роутов в приложении
 */
export const router = createHashRouter([
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
          <AppRedux>
            <LoginReduxContainer />
          </AppRedux>
        ),
      },
      {
        path: "login-redux/success",
        element: (
          <AppRedux>
            <LoginSuccessful />
          </AppRedux>
        ),
      },
      {
        path: "login-formik",
        element: (
          <AppRedux>
            <LoginFormik />
          </AppRedux>
        ),
      },
      {
        path: "login-formik/success",
        element: (
          <AppRedux>
            <LoginSuccessful />
          </AppRedux>
        ),
      },
      {
        path: "get-activity-saga",
        element: (
          <AppReduxSaga>
            <GetActivitySaga />
          </AppReduxSaga>
        ),
      },
      {
        path: "login-mst",
        element: (
          <AppMst>
            <LoginMstContainer />
          </AppMst>
        ),
      },
      {
        path: "login-mst/success",
        element: (
          <AppMst>
            <LoginSuccessfulMst />
          </AppMst>
        ),
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
