import { FormEvent, useRef } from "react";

export const useDebounce = (callback: (event: FormEvent<HTMLInputElement>) => void, delay = 500) => {
    const timer = useRef<number>();
    return (event: FormEvent<HTMLInputElement>) => {
        clearTimeout(timer.current);
        timer.current = setTimeout(() => {
            callback(event);            
        }, delay);
    }
};