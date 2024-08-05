import { FC, memo, useCallback, useState } from "react";
import { ITextPopub } from "./TextPopub.interface";
import cn from "clsx";
import styles from "./TextPopub.module.sass";
import Button from "../../ui/Button/Button";
import { useLotteryStore } from '../../../store/lottery/lottery.store';
import { IPerson } from "../../../store/lottery/lottery.interface";

const TextPopub: FC<ITextPopub> = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const setState = useLotteryStore(state => state.setState);
    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [isOpen, setIsOpen]);

    const save = useCallback(() => {
        const result: IPerson[] = [];
        
        setState(result, result.length + 1);
    }, [value]);
    return (
        <>
            <button
                type="button"
                onClick={toggle}
                className={cn(styles.icon)}
            >
                <img src={"images/edit.svg"} alt="Text field" />
            </button>

            <div
                className={cn(styles.popub, {
                    [styles.open]: isOpen
                })}
            >
                <div className={cn(styles.wrapper)}>
                    <textarea
                        value={value}
                        onChange={(event) => { setValue(event.target.value); }}
                    />
                    <Button
                        type="button"
                        onClick={save}
                    >
                        Зберегти
                    </Button>
                </div>
            </div>
        </>
    );
};

export default memo(TextPopub);