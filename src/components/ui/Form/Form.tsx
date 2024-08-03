import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { IForm } from './Form.interface';
import cn from "clsx";
import Input from '../Input/Input';

const Form: FC<IForm> = ({onSubmit, fields, submitText}): JSX.Element => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(({options, id, ...rest}) => {
                return (
                <Input
                    key={id}
                    {...rest}
                    id={id}
                    {...register(id, options)}
                    />
                );
            })}

            <button type="submit">{submitText}</button>
        </form>
    );
};

export default memo(Form);