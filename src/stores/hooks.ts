import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./redux/store";
import { AppSagaDispatch, RootSagaState } from "./saga/storeSaga";

// определяет типизированные хуки для redux и redux c сагами
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useSagaDispatch: () => AppSagaDispatch = useDispatch;
export const useSagaSelector: TypedUseSelectorHook<RootSagaState> = useSelector;
