import { FC, memo, useCallback, ChangeEvent } from 'react';
import { indexFields } from '../../../constants/index-fields';
import Form from '../../ui/Form/Form';
import { FieldValues } from 'react-hook-form';
import ImagePicker from '../../ui/ImagePicker/ImagePicker';
export const HomePage: FC = (): JSX.Element => {
    const createLottery = useCallback((data: FieldValues) => {
        const { count } = data as { count: number };
        
    }, []);

    const setBg = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (files !== null && files.length > 0) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const image = event?.target?.result;
                document.body.style.backgroundImage = `url('${image}')`;
            }
            reader.readAsDataURL(files[0]);
        }
        
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