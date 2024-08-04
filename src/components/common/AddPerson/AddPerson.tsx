import { FC, memo, useCallback } from 'react';
import cn from "clsx";
import styles from "./AddPerson.module.sass";
import { useLotteryStore } from '../../../store/lottery/lottery.store';

const AddPerson: FC = () => {
    const addPerson = useLotteryStore(state => state.addPerson);
    const clickHandler = useCallback(() => { addPerson(""); }, []);
    return (
        <button
            onClick={clickHandler}
            className={cn(styles.button)}
        >
            +
        </button>
    );
}

export default memo(AddPerson);