import { FC, memo, useCallback, useRef } from 'react'
import Button from '../Button/Button';
import { IImagePicker } from './ImagePicker.interface';
import cn from "clsx";
import styles from "./ImagePicker.module.sass";

const ImagePicker: FC<IImagePicker> = ({ onChange }): JSX.Element => {
    const changeHandler = useCallback(onChange, []);
    const input = useRef<HTMLInputElement>(null);
    const buttonClick = useCallback(() => { input?.current?.click(); }, []);

    return (
        <>
            <Button
                onClick={buttonClick}
                type='button'
                className={cn(styles.button)}
            >
                Змінити задній фон
            </Button>
            <input
                ref={input}
                className={cn(styles.input)}
                type="file"
                accept='image/*'
                onChange={changeHandler}
            />
        </>
  )
}

export default memo(ImagePicker);