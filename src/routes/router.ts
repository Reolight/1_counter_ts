import { createBrowserRouter, createHashRouter } from "react-router-dom";
import { appRoutes } from "./appRoutes";

export const browserRouter = createBrowserRouter(appRoutes, { basename: '/1_counter_ts'});
export const hashRouter = createHashRouter(appRoutes);