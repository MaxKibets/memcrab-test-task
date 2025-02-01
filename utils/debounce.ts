type DebounceCallback<T> = (...args: T[]) => void;

const debounce = <T>(
  callback: DebounceCallback<T>,
  delay: number,
): DebounceCallback<T> => {
  if (delay <= 0) return callback;

  let timeoutId: NodeJS.Timeout;

  return function (...args) {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, args), delay);
  };
};

export default debounce;
