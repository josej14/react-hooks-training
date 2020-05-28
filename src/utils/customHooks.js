import { useState, useCallback, useEffect, useRef } from 'react';
import _ from 'lodash';

const useInterval = (callback, delay) => {

  useEffect(() => {

  });

  useEffect(() => {

    // const id = setInterval(tick, delay);
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
