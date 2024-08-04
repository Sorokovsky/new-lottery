import { FC, memo } from 'react';
import Input from '../../ui/Input/Input';
import { IRow } from './Row.interface';

const Row: FC<IRow> = ({ person }) => {
    return (
        <tbody>
            <tr>
                <td>
                    <span>{person.id}.</span>
                    <Input
                        type={'text'}
                        defaultValue={person.name}
                    />
                </td>
            </tr>
        </tbody>
    );
}

export default memo(Row);