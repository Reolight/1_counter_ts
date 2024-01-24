import { Provider } from "react-redux";
import { storeSaga } from "./storeSaga";

interface IProps {
  children?: JSX.Element;
}

/**
 * Компонент, предоставляющий хранилище redux для дочерних компонентов.
 * Используется для задания с redux-saga
 * @param props 
 * @returns 
 */
function ReduxSagaProvider(props: IProps) {
  return (
    <>
      <Provider store={storeSaga}>{props.children}</Provider>
    </>
  );
}

export default ReduxSagaProvider;