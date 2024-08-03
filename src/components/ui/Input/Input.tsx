import { FC, memo, useState, useCallback, forwardRef } from 'react'
import { IInput } from './Input.interface';
import cn from "clsx";
import styles from "./Input.module.sass";

const Input: FC<IInput> = forwardRef<HTMLInputElement, IInput>(
  ({ className = "", onChange = () => { }, ...rest }, ref): JSX.Element => {
  const [value, setValue] = useState(0);
  const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(+event.target.value);
    onChange(event);
  }, [value]);
  return (
    <input
      className={cn(className, styles.input)}
      value={value}
      onChange={onChangeHandler}
      ref={ref}
      {...rest}
    />
  );
});

export default memo(Input);