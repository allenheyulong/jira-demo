import { useEffect, useState } from "react";

function isFalsy(val: unknown) {
  return val === 0 ? false : !val;
}

export const clearObj = (object: object) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const val = result[key];

    if (isFalsy(val)) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    // 每次在上一个useEffect处理完以后才会去运行
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};

// 组件首次加载时调用
export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []);
};

export const useArray = <T>(
  person: T[]
): {
  clear: () => void;
  value: T[];
  add: (person: T) => void;
  removeIndex: (index: number) => void;
} => {
  const [personState, setPersonState] = useState(person);

  return {
    clear: () => {
      setPersonState([]);
    },
    value: [...personState],
    add: (person: T) => {
      setPersonState([...personState, person]);
    },
    removeIndex: (index: number) => {
      setPersonState([
        ...personState.filter((p: T, ind: number) => ind !== index),
      ]);
    },
  };
};
