import { useDispatch, useSelector } from "react-redux";
import Button from "@material-ui/core/Button";

import { clear, decrement, increment } from "store/timer";

import styles from "./Counter.module.scss";

const Counter = () => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer);
  return (
    <div className={styles.Counter}>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          // { type: 'timer/decrement', payload: 1  }
          // dispatch({ type: 'timer/decrement', payload: 1 })
          dispatch(decrement(1));
        }}
      >
        -
      </Button>
      <div className={styles.Counter__Value}>{timer}</div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => dispatch(increment(1))}
      >
        +
      </Button>

      <div>
        <Button onClick={() => dispatch(clear())}>Clear</Button>
      </div>
    </div>
  );
};

export default Counter;
