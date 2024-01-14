import { useState } from "react";
import Counter from "../views/Counter";
import { StackLayout } from "@progress/kendo-react-layout";
import { produce } from "immer";

interface IState {
  counters: [{ value: number; visible: boolean }];
}

const initialVal: IState = { counters: [{ value: 0, visible: true }] };

/**
 * Контейнер счётчиков, который содержит своё состояние и состояние 
 * счётчиков
 */
export default function CounterOfCounters(): JSX.Element {
  const [state, setState] = useState<IState>({ ...initialVal });

  /**
   * Увеличивает значение определённого счётчика на 1
   * @param index индекс счётчика в массиве счётчиков
   */
  function increment(index: number) {
    setState(
      produce(state, (draft) => {
        draft.counters[index].value++;
      })
    );
  }

  /**
   * Уменьшает значение определённого счётчика на 1
   * @param index индекс счётчика в массиве счётчиков
   */
  function decrement(index: number) {
    setState(
      produce(state, (draft) => {
        draft.counters[index].value--;
      })
    );
  }

  /**
   * Сбрасывает значение определённого счётчика на 0
   * @param index индекс счётчика в массиве счётчиков
   */
  function reset(index: number) {
    setState(
      produce(state, (draft) => {
        draft.counters[index].value = 0;
      })
    );
  }

  /**
   * Добавляет новый счётчик. Чётные значения других счётчиков будут увеличены на 1
   * и станут видимыми, если ранее были скрыты. Счётчики с нечётными значениями будут скрыты.
   */
  function addCounter() {
    setState(
      produce(state, (draft) => {
        draft.counters.forEach((counter) => {
          if (counter.value % 2 === 0) {
            counter.value++;
            counter.visible = true;
          } else counter.visible = false;
        });

        draft.counters.push({ value: 0, visible: true });
      })
    );
  }

  /**
   * Удаляет последний счётчик. Нечётные значения других счётчиков будут уменьшены на 1,
   * если ранее они были скрыты, то станут видимыми. Счётчики с чётными значениями 
   * будут скрыты.
   */
  function removeCounter() {
    setState(
      produce(state, (draft) => {
        draft.counters.pop();
        draft.counters.forEach((counter) => {
          if (counter.value % 2 !== 0) {
            counter.value--;
            counter.visible = true;
          } else counter.visible = false;
        });
      })
    );
  }
  
  /**
   * Сбрасывает количество счётчиков до одного, а его значение до 0.
   */
  function resetCounters() {
    setState({ ...initialVal });
  }

  return (
    <StackLayout orientation="vertical">
      <Counter
        count={state.counters.length}
        counterName="Count of counters:"
        increment={addCounter}
        decrement={removeCounter}
        reset={resetCounters}
      />
      <StackLayout orientation="horizontal">
        {state.counters.map(
          (counter, index) =>
            counter.visible && (
              <Counter
                key={index}
                count={counter.value}
                counterName={`No. ${index}:`}
                increment={() => increment(index)}
                decrement={() => decrement(index)}
                reset={() => reset(index)}
              />
            )
        )}
      </StackLayout>
    </StackLayout>
  );
}
