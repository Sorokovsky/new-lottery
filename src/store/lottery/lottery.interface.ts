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
    setState: (people: IPerson[], lastIndex: number) => void;
};