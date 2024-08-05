import { useRef } from "react"

type Callback<Arg> = (arg: Arg) => void;

export const useDebaunce = <T>(callback: Callback<T>, delay: number = 500): Callback<T> => {
    const timer = useRef<number>();
    return (arg: T) => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => callback(arg), delay);
    }
}