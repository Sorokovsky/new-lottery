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

    clear() {
        set(() => {
            return {
                people: [],
                lastId: 1
            }
        }
        );
    },

    parseFromText(text: string): void {
        console.log(text);
        
    },

    editPerson(id, newName) {
        const people = [...this.people];
        for (let i = 0; i < people.length; i++) {
            if (people[i].id === id) {
                people[i].name = newName;
            }
        }
        set(state => {
            return {
                ...state,
                people: people,
            };
        });
   }, 
}));