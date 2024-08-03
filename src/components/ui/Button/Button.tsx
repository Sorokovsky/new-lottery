import { FC, memo } from 'react'
import { IButton } from './Button.interface'

const Button: FC<IButton> = (): JSX.Element => {
  return (
    <div>Button</div>
  )
}

export default memo(Button);