import { ChangeEvent, FC, memo, useCallback, useState } from "react";
import { ITextPopub } from "./TextPopub.interface";
import cn from "clsx";
import styles from "./TextPopub.module.sass";
import Button from "../../ui/Button/Button";
import { useLotteryStore } from '../../../store/lottery/lottery.store';

const TextPopub: FC<ITextPopub> = (): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState("");
    const parseFromText = useLotteryStore(state => state.parseFromText);
    const toggle = useCallback(() => {
        setIsOpen(prev => !prev);
    }, [isOpen, setIsOpen]);

    const save = useCallback(() => {
        parseFromText(value);
    }, [value]);

    const changeHandler = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    }, []);
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
                        onChange={changeHandler}
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