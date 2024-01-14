import { call, put, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";

/**
 * Worker Saga для получения данных с Bored API
 */
function* fetchActivity() {
  try {
    yield put({ type: "activity/requestActivity" });
    const response: AxiosResponse = yield call(
      axios.get,
      "https://www.boredapi.com/api/activity"
    );
    yield put({
      type: "activity/requestActivitySuccess",
      payload: response.data,
    });
  } catch (e) {
    yield put({
      type: "activity/requestActivityFailed",
      payload: (e as Error).message,
    });
  }
}

/**
 * Сага для перенаправления типа действий FETCH_ACTIVITY в рабочую сагу
 */
export function* fetchActivitySaga() {
  yield takeEvery("FETCH_ACTIVITY", fetchActivity);
}

/**
 * Возвращает объект Action для инициации получения данных с Bored API
 * @returns объект Action, который определяет действие для инициирования
 * получения данных с API
 */
export const fetchActivityAction = () => {
  return { type: "FETCH_ACTIVITY" };
};
