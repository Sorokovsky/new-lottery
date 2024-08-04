import { ReactNode } from "react";
import { FieldValues } from "react-hook-form";
import { TField } from "../../../types/field.type";
export interface IForm {
    fields: TField[];
    onSubmit: (data: FieldValues) => void;
    submitText: string;
    children?: ReactNode;
}
