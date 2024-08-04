import { TField } from "../types/field.type";
import { FormEvent } from 'react';

export const indexFields: TField[] = [
    {
        id: "count",
        type: 'number',
        description: "Введіть число учасників: ",
        options: {},
        validate: (event: FormEvent<HTMLInputElement>) => {
            const target = event.target as HTMLInputElement;
            const value: number = +target.value;
            if (value < 0) {
                target.value = '0';
            }
        }
    }
];