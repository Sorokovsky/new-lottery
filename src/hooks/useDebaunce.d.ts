import { FormEvent } from "react";
export declare const useDebounce: (callback: (event: FormEvent<HTMLInputElement>) => void, delay?: number) => (event: FormEvent<HTMLInputElement>) => void;
