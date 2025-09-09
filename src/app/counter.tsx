'use client';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '@/store/features/counter/counterSlice';
import type { RootState } from '@/store';

export function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Incrementando
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrementando
        </button>
      </div>
    </div>
  );
}