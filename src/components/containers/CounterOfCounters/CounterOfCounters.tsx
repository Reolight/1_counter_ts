import { useState } from "react";
import Counter from "../../views/Counter/Counter";
import { StackLayout } from "@progress/kendo-react-layout";
import { produce } from "immer";

interface CounterState {
  value: number; 
  visible: boolean;
}

const counterInitialState: CounterState = { value: 0, visible: true }

const initialValue: CounterState[] = [ counterInitialState ] ;
/**
 * Контейнер счётчиков, который содержит своё состояние и состояние 
 * счётчиков
 */
export default function CounterOfCounters(): JSX.Element {
  const [state, setState] = useState<CounterState[]>( initialValue );

  /**
   * Увеличивает значение определённого счётчика на 1
   * @param index индекс счётчика в массиве счётчиков
   */
  function increment(index: number) {
    setState(
      produce(state, (draft) => {
        draft[index].value++;
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
        draft[index].value--;
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
        draft[index].value = 0;
      })
    );
  }

  function isEven(value: number) {
    return value % 2 === 0;
  }

  function showCounter(counter: CounterState){
    counter.visible = true;
  }

  function hideCounter(counter: CounterState){
    counter.visible = false;
  }

  /**
   * Добавляет новый счётчик. Чётные значения других счётчиков будут увеличены на 1
   * и станут видимыми, если ранее были скрыты. Счётчики с нечётными значениями будут скрыты.
   */
  function addCounter() {
    setState(
      produce(state, (draft) => {        
        draft.forEach((counter) => {
          if (isEven(counter.value)) {
            counter.value++;
          } else {
            hideCounter(counter);
          }
        });
        
        draft.push( counterInitialState );
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
        draft.pop();
        let visible = draft.filter(cntr => cntr.visible).length;
        draft.forEach((counter) => {
          if (!isEven(counter.value)) {
            counter.value--;
          } else {
            if (visible > 1) {
              hideCounter(counter)
              visible--;
            }
          }
        });

        if (visible < 1 && draft.length > 1) {
          showCounter(draft.at(-1) as CounterState);
        }
      })
    );
  }
  
  /**
   * Сбрасывает количество счётчиков до одного, а его значение до 0.
   */
  function resetCounters() {
    setState( initialValue );
  }

  return (
    <StackLayout orientation="vertical">
      <Counter
        count={state.length}
        counterName="Count of counters:"
        increment={addCounter}
        decrement={removeCounter}
        reset={resetCounters}
      />
      <StackLayout orientation="horizontal">
        {state.map(
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
