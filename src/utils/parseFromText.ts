import { IPerson } from "../store/lottery/lottery.interface";

export const parseFromText = (text: string): IPerson[] => {
    const lines = text.split("\n");
    const result: IPerson[] = [];
    lines.forEach(line => {
        const match = line.match(/^(\d+)\.\s*(.+)$/);
        if (match) {
            const name = match[2];
            result.push({ id: result.length + 1, name });
        }
    });
    return result;
};