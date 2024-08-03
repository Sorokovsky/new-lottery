import { InputHTMLAttributes } from "react";
import type { RegisterOptions } from "react-hook-form";

export type TField = {
    id: string;
    type: InputHTMLAttributes<HTMLInputElement>['type'];
    placeholder?: string;
    options: RegisterOptions;
    className?: string;
};