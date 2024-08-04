import { FC, memo } from 'react'
import { IButton } from './Button.interface'
import cn from "clsx";
import styles from "./Button.module.sass";

const Button: FC<IButton> = ({children, className, ...rest}): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className)}    
            {...rest}
        >
            {children}
        </button>
  )
}

export default memo(Button);