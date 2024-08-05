import { create } from "zustand";
import { parseFromText } from "../../utils/parseFromText";
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

    editPerson(id, newName) {        
        set(state => {
            const people = [...state.people];
            for (let i = 0; i < people.length; i++) {
                if (people[i].id === id) {
                    people[i].name = newName;
                }
            }
            return {
                ...state,
                people: people,
            };
        });
    }, 

    parseFromText(text) {
        const people = parseFromText(text);
        set(state => {
            return {
                ...state,
                people,
                lastId: people.length + 1,
            }
        })
    },
}));