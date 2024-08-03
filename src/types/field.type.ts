import { InputHTMLAttributes, ChangeEventHandler } from "react";
import type { RegisterOptions } from "react-hook-form";

export type TField = InputHTMLAttributes<HTMLInputElement> & {
    id: string;
    placeholder?: string;
    options: RegisterOptions;
    className?: string;
    description?: string;
    validate?: ChangeEventHandler<HTMLInputElement>;
};