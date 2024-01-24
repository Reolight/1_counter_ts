import { Provider } from "react-redux";
import { store } from "./store";

interface IProps {
  children?: JSX.Element;
}

/**
 * Компонент, предоставляющий провайдер redux хранилища дочерним компонетнам.
 * @param props содержит дочерний компонент
 * @returns react комппонент
 */
function ReduxProvider(props: IProps) {
  return (
    <>
      <Provider store={store}>{props.children}</Provider>
    </>
  );
}

export default ReduxProvider;
