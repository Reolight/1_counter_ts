import { Outlet } from "react-router-dom";
import "./App.css";
import { GridLayout, GridLayoutItem } from "@progress/kendo-react-layout";
import Sidebar from "./Sidebar";
import { Suspense } from "react";
import Loading from "@views/Loading";
import React from "react";

/**
 * Главный компонент, который добавляет боковое меню всем дочерним элементам
 * @returns JSX.Element
 */
function App() {
  return (
    <>
      <GridLayout cols={[{ width: 250 }, { width: ''}]}>
        <GridLayoutItem col={1}>
          <Sidebar />
        </GridLayoutItem>

        <Suspense fallback={<Loading /> }>
          <GridLayoutItem col={2}>
            <Outlet />
          </GridLayoutItem>
        </Suspense>
      </GridLayout>
    </>
  );
}

export default App;
