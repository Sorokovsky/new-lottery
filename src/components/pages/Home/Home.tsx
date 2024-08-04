import { FC, memo, useCallback } from 'react';
import { indexFields } from '../../../constants/index-fields';
import Form from '../../ui/Form/Form';
import { FieldValues } from 'react-hook-form';
import ImagePicker from '../../ui/ImagePicker/ImagePicker';
import { setBg } from '../../../utils/setBg';
import { useLotteryStore } from '../../../store/lottery/lottery.store';
import { useNavigate } from 'react-router-dom';
export const HomePage: FC = (): JSX.Element => {
    const navigate = useNavigate();
    const addPerson = useLotteryStore(state => state.addPerson);
    const clearState = useLotteryStore(state => state.clear);
    const createLottery = useCallback((data: FieldValues) => {
        const { count } = data as { count: number };
        clearState();
        for (let i = 0; i < count; i++) {
            addPerson("");
        }
        navigate("/lottery");
    }, []);

    return (
        <main>
            <Form
                onSubmit={createLottery}
                submitText={"Створити лотерею"}
                fields={indexFields}
            >
                <ImagePicker onChange={setBg} />
            </Form>
        </main>
    );
};

export default memo(HomePage);