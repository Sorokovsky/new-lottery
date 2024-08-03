import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { IForm } from './Form.interface';
import cn from "clsx";

const Form: FC<IForm> = ({onSubmit, fields, submitText}): JSX.Element => {
    const { register, handleSubmit } = useForm();

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(({type, options, className = "", placeholder, id}) => {
                return <input
                    type={type}
                    className={cn(className)}
                    placeholder={placeholder}
                    key={id}
                    {...register(id, options)}
                />;
            })}

            <button type="submit">{submitText}</button>
        </form>
    );
};

export default memo(Form);