import { useState, useCallback, useEffect, useRef } from 'react';
import _ from 'lodash';

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };

    const id = setInterval(tick, delay);
    return () => clearInterval(id);
  }, [delay]);
};

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState)
  const setMergedState = useCallback(value => {
    setState(prevState => {
      const newState = _.isFunction(value) ? value(prevState) : value
      return Object.assign({}, prevState, newState)
    })
  }, [setState])
  return [state, setMergedState]
}

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const useConstCallback = (callback) => useCallback(callback, []);

export {
  useMergeState,
  usePrevious,
  useConstCallback,
  useInterval,
};
