import React from "react";
import Counter from "../views/Counter";

interface IProps {}
interface IState {
  count: number;
}

/**
 * Классовый компонент, который реализует простой счётчик с тремя кнопками:
 * увеличить, уменьшить и сбросить.
 */
export default class CounterContainer extends React.Component<IProps, IState> {
  constructor() {
    super({});
    this.state = { count: 0 };
  }

  /**
   * Увеличивает счётчик на единицу
   */
  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  /**
   * Уменьшает счётчик на единицу
   */
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  /**
   * Сбрасывает счётчик на 0
   */
  reset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <Counter
        count={this.state.count}
        increment={this.increment.bind(this)}
        decrement={this.decrement.bind(this)}
        reset={this.reset.bind(this)}
      />
    );
  }
}
