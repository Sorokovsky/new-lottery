import { HTMLAttributes } from "react";
import { TField } from "../../../types/field.type";

export interface IInput extends HTMLAttributes<HTMLInputElement> {
    description?: string;
    validate?: TField['validate'];
};