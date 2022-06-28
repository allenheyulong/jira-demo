import { useEffect, useState } from "react";

function isFalsy(val) {
  return val === 0 ? false : !val;
}

export const clearObj = (object) => {
  const result = { ...object };

  Object.keys(result).forEach((key) => {
    const val = result[key];

    if (isFalsy(val)) {
      delete result[key];
    }
  });

  return result;
};

export const useDebounce = (value, delay) => {
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
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
