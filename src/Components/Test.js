import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { applyActions } from '../redux/modules/test';
const Test = () => {
  const dispatch = useDispatch();
  const test = useSelector((state) => state.test.number);

  const increase = useCallback(
    () => dispatch(applyActions.increase()),
    [dispatch],
  );
  const decrease = () => {
    dispatch(applyActions.decrease());
  };
  return (
    <div>
      <button onClick={increase}>증가</button>
      {test}
      <button onClick={decrease}>감소</button>
    </div>
  );
};

export default Test;
