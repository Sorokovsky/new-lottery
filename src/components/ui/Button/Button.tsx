import { FC, memo } from 'react'
import { IButton } from './Button.interface'
import cn from "clsx";
import styles from "./Button.module.sass";

const Button: FC<IButton> = ({children, className}): JSX.Element => {
    return (
        <button
            className={cn(styles.button, className)}    
        >
            {children}
        </button>
  )
}

export default memo(Button);