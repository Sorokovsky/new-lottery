import { FC, memo, useCallback } from 'react';
import { indexFields } from '../../../constants/index-fields';
import Form from '../../ui/Form/Form';
import { FieldValues } from 'react-hook-form';
export const HomePage: FC = (): JSX.Element => {
    const createLottery = useCallback((data: FieldValues) => {
        const { count } = data as { count: number };
        
    }, []);

    return (
        <main>
            <Form
                onSubmit={createLottery}
                submitText={"Створити лотерею"}
                fields={indexFields}
            />
        </main>
    );
};

export default memo(HomePage);