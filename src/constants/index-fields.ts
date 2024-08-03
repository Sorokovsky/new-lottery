import { TField } from "../types/field.type";

export const indexFields: TField[] = [
    {
        id: "count",
        type: 'number',
        description: "Введіть число учасників: ",
        options: {},
        validate: (event) => {
            const value: number = +event.target.value;
            if (value < 0) {
                event.target.value = '0';
            }
        }
    }
];