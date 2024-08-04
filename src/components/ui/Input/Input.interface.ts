import { InputHTMLAttributes } from "react";
import { TField } from "../../../types/field.type";

export interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    description?: string;
    validate?: TField['validate'];
};