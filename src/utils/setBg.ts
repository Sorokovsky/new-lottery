import { ChangeEvent } from "react";

export const setBg = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files !== null && files.length > 0) {
        const reader = new FileReader();
        reader.onload = (event) => {
            const image = event?.target?.result;
            document.body.style.backgroundImage = `url('${image}')`;
        }
        reader.readAsDataURL(files[0]);
    }        
};