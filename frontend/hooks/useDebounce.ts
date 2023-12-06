import { useEffect, useState } from "react";

export interface IDebounce {
  value: string;
  delay?: number;
}

export const useDebounce = (value:string,delay:number) => {
 
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log("setting new timeout");
      setDebouncedValue(value);
    }, delay);

    return () => {
      console.log("clearing the timeout");
      clearTimeout(id);
    };
  });

  return debouncedValue;
};
