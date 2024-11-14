import { create } from "zustand";

const useStore = create((set) => ({
  isAside: "Hola",
  hiddenAside: () => set(() => ({ isAside: "Esconder" })),
  showAside: () => set(() => ({ isAside: "Hola" })),
}));
/*
const useCountStore = create<State & Actions>((set) => ({
  count: 0,
  setCount: (countCallback) =>
    set((state) => ({ count: countCallback(state.count) })),
}))
*/

export default useStore;