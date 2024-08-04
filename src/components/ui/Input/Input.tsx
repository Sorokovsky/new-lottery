import { FC, memo, useState, useCallback, forwardRef, ChangeEvent, FormEvent } from 'react';
import { IInput } from './Input.interface';
import cn from "clsx";
import styles from "./Input.module.sass";

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
  ({ className = "", onChange = () => { }, validate = () => {}, id, description, defaultValue, ...rest }, ref): JSX.Element => {
    const [value, setValue] = useState(defaultValue);
    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      validate(event);
      setValue(event.target.value);
      onChange(event);
  }, [value]);
    return (
      <>
        {description && <label htmlFor={id}>{description}</label>}
        <input
          className={cn(className, styles.input)}
          value={value}
          onChange={onChangeHandler}
          id={id}
          ref={ref}
          {...rest}
        />
      </>
    );
  }
);

export default memo(Input);