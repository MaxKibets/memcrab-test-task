type DebounceCallback<T> = (...args: T[]) => void;

const debounce = <T>(
  callback: DebounceCallback<T>,
  delay: number,
): DebounceCallback<T> => {
  if (delay <= 0) return callback;

  let timeoutId: NodeJS.Timeout;

  return (...args) => {
    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback(...args), delay);
  };
};

export default debounce;
