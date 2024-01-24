import { StackLayout } from "@progress/kendo-react-layout";
import { NavLink } from "react-router-dom";

/**
 * Компонент, который отображает боковое меню с возможностью навигации.
 * @returns компонент бокового меню
 */
export default function Sidebar(): JSX.Element {
  return (
    <StackLayout orientation="vertical" id="navbar">
      <NavLink to="/counters">Counters</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/login-redux">Login with redux</NavLink>
      <NavLink to="/login-formik">Login with formik</NavLink>
      <NavLink to="/get-activity-saga">Get activity (Saga)</NavLink>
      <NavLink to="/login-mst">Login with MST</NavLink>
    </StackLayout>
  );
}
