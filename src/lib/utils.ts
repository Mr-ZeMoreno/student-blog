export function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  return keys.reduce(
    (acc, key) => {
      if (key in obj) {
        Object.assign(acc, { [key]: obj[key] });
      }
      return acc;
    },
    {} as Pick<T, K>,
  );
}
