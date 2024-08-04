import { ChangeEvent, FC, memo, useCallback } from 'react';
import Input from '../../ui/Input/Input';
import { IRow } from './Row.interface';

const Row: FC<IRow> = ({ person }) => {
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    }, []);
    return (
        <tbody>
            <tr>
                <td>
                    <span>{person.id}.</span>
                    <Input
                        type={'text'}
                        onChange={onChange}
                        defaultValue={person.name}
                    />
                </td>
            </tr>
        </tbody>
    );
}

export default memo(Row);