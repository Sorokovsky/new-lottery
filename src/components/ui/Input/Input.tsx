import { FC, memo, useState, useCallback, forwardRef } from 'react'
import { IInput } from './Input.interface';
import cn from "clsx";
import styles from "./Input.module.sass";
import { useDebounce } from '../../../hooks/useDebaunce';

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
  ({ className = "", onChange = () => { }, validate = () => {}, id, description, ...rest }, ref): JSX.Element => {
    const [value, setValue] = useState(0);
    const debauncedChange = useDebounce(onChange, 1000);
    const debauncedValidate = useDebounce(validate, 1000);
    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
      debauncedValidate(event);
      setValue(+event.target.value);
      debauncedChange(event);
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