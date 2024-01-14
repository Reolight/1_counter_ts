import { Outlet } from "react-router-dom";
import "./App.css";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import Sidebar from "./Sidebar";

/**
 * Главный компонент, который добавляет боковое меню всем дочерним элементам
 * @returns JSX.Element
 */
function App() {
  return (
    <>
      <GridLayout cols={[{ width: 250 }, {}]}>
        <GridLayoutItem col={1}>
          <Sidebar />
        </GridLayoutItem>

        <GridLayoutItem col={2}>
          <Outlet />
        </GridLayoutItem>
      </GridLayout>
    </>
  );
}

export default App;
