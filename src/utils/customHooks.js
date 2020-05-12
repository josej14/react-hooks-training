import { useState, useCallback } from 'react';

const useMergeState = (initialState) => {
  const [state, setState] = useState(initialState);
  const setMergedState = useCallback((newState) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  }, [setState]);
  return [state, setMergedState];
};

export { useMergeState };
