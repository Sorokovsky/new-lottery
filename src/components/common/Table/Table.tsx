import { FC, memo, useState, useCallback, useRef, useEffect } from 'react';
import { ITable } from './Table.interface';
import cn from "clsx";
import styles from "./Table.module.sass";
import Row from '../Row/Row';
import AddPerson from '../AddPerson/AddPerson';
import Button from '../../ui/Button/Button';

const Table: FC<ITable> = ({ title, people }) => {
    const [closed, setClosed] = useState(false);
    const [result, setResult] = useState("Тут буде переможець");
    const table = useRef<HTMLTableElement>(null);
    const closeHandler = useCallback(() => {
        setClosed(prev => !prev);
    }, [closed]);

    return (
        <div className={cn(styles.wrapper)}>
            <div className={cn(styles.head)}>
                <h3 className={cn(styles.heading)}>
                    {title}
                </h3>
                <button
                    onClick={closeHandler}
                    className={cn(styles.close, {
                        [styles.closed]: closed
                    })}
                    type={'button'}
                >
                    +
                </button>
            </div>
            <table ref={table} className={cn(styles.table, {
                [styles.closed]: closed
            })}>
                {people.map(person => <Row key={person.id} person={person} />)}
                <tbody>
                    <tr>
                        <td>
                            <AddPerson />
                        </td>
                    </tr>
                </tbody>
            </table>
            <Button>Розіграти</Button>
            <span className={cn(styles.result)}>{result}</span>
        </div>
    );
};

export default memo(Table);