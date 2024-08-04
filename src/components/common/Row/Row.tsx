import { ChangeEvent, FC, memo, useCallback } from 'react';
import Input from '../../ui/Input/Input';
import { IRow } from './Row.interface';
import { useLotteryStore } from '../../../store/lottery/lottery.store';

const Row: FC<IRow> = ({ person }) => {
    const editPerson = useLotteryStore(state => state.editPerson);
    const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        editPerson(person.id, event.target.value);
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