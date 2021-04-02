import React, { useState } from 'react';

type OnceParams = () => void;

const useRunOnce = () => {
  const [state, setState] = useState(0);
  const once = (cb: OnceParams) => {
    if (state < 1) {
      cb();
      setState(state + 1);
    }

    return;
  };

  return once;
};

export default useRunOnce;
