import { FC, memo } from 'react';
import { useForm } from 'react-hook-form';
import { IForm } from './Form.interface';
import cn from "clsx";
import Input from '../Input/Input';
import styles from './Form.module.sass';
import Button from '../Button/Button';

const Form: FC<IForm> = ({onSubmit, fields, submitText, children}): JSX.Element => {
    const { register, handleSubmit } = useForm();

    return (
        <section
            className={cn(styles.wrapper)}
        >
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={cn(styles.form)}
            >
                {fields.map(({options, id, ...rest}) => {
                    return (
                        <Input
                            key={id}
                            id={id}
                            {...rest}
                            {...register(id, options)}
                        />
                    );
                })}
                <Button
                    type='submit'
                >
                    {submitText}
                </Button>
                {children}
            </form>
        </section>
    );
};

export default memo(Form);