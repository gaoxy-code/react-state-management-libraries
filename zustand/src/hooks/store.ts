import { create, type StateCreator } from "zustand";

type State = {
  count: number;
};

type Action = {
  increase: () => void;
  decrease: () => void;
};

const initialState: State = {
  count: 0,
};

const useSlice: StateCreator<State & Action> = (set, get) => ({
  ...initialState,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => {
    const count = get().count;
    set(() => ({ count: count - 1 }));
  },
});

export const useStore = create(useSlice);

// ストアの外で状態の更新を定義することも可能
export const reset = () => useStore.setState(initialState);
