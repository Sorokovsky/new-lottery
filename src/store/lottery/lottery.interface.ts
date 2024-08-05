export interface IPerson {
    name: string;
    id: number;
};

export interface LotteryStore {
    people: IPerson[];
    lastId: number;
    addPerson: (name: string) => void;
    clear: () => void;
    editPerson: (id: number, newName: string) => void;
    parseFromText: (text: string) => void;
};