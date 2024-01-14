import "./App.css";
import { Provider } from "react-redux";
import { storeSaga } from "./stores/saga/storeSaga";

interface IProps {
  children?: JSX.Element;
}

/**
 * Компонент, предоставляющий хранилище redux для дочерних компонентов.
 * Используется для задания с redux-saga
 * @param props 
 * @returns 
 */
function AppReduxSaga(props: IProps) {
  return (
    <>
      <Provider store={storeSaga}>{props.children}</Provider>
    </>
  );
}

export default AppReduxSaga;
