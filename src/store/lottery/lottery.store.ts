import { create } from "zustand";
import { LotteryStore } from "./lottery.interface";

export const useLotteryStore = create<LotteryStore>((set) => ({
    people: [],
    lastId: 1,

    addPerson(name: string): void {
        set((state) => (
            {
                people: [...state.people, { name, id: state.lastId }],
                lastId: state.lastId + 1
            }
        ));
    },

    parseFromText(text: string): void {
    },
}));