import { FC, memo } from 'react';
import { ITable } from './Table.interface';
import cn from "clsx";
import styles from "./Table.module.sass";
import Row from '../Row/Row';
import AddPerson from '../AddPerson/AddPerson';

const Table: FC<ITable> = ({ title, people }) => {
    return (
        <div className={cn(styles.wrapper)}>
            <h3 className={cn(styles.heading)}>{title}</h3>
            <table className={cn(styles.table)}>
                {people.map(person => <Row key={person.id} person={person} />)}
            </table>
            <AddPerson />
        </div>
    )
}

export default memo(Table);