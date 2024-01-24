import { LoginStoreProvider, loginStore } from "./loginModel";

interface IProps {
  children?: JSX.Element;
}

/**
 * Компонент, который добавляет провайдер контекста для Mobx-state-tree.
 * @param props содержит дочерний компонент
 * @returns react комппонент
 */
function MstProvider(props: IProps) {
  return (
    <>
      <LoginStoreProvider value={loginStore}>
        {props.children}
      </LoginStoreProvider>
    </>
  );
}

export default MstProvider;
