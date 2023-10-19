# Zustand

- [docs](https://zustand-demo.pmnd.rs/)
- [github](https://github.com/pmndrs/zustand)

## Tips

#### Store利用の注意点  
  - storeを丸ごと呼び出すと内部のstateが更新されるたびに再レンダリングされる
  - 不要な再レンダリングを防ぐためにはstateごとの呼び出しが必要
  ``` ts
  // store丸ごと
  const store= useStore();

  // stateごと
  const increase = useStore((state) => state.increase);
  const decrease = useStore((state) => state.decrease);
  ```


### [スライスパターン](https://docs.pmnd.rs/zustand/guides/slices-pattern)
ストアを複数の小さなストアに分割する

``` ts
import { create, type StateCreator } from "zustand";

type FirstProps = {
  hoge: number;
  increase: () => void;
};

const createFirstSlice: StateCreator<FirstProps> = (set) => ({
  hoge: 0,
  increase: () => set((state) => ({ hoge: state.hoge + 1 })),
});

type SecondProps = {
  fuga: number;
  decrease: () => void;
};

const createSecondSlice: StateCreator<SecondProps> = (set) => ({
  fuga: 0,
  decrease: () => set((state) => ({ fuga: state.fuga - 1 })),
});

export const useStore = create<FirstProps & SecondProps>((...set) => ({
  ...createFirstSlice(...set),
  ...createSecondSlice(...set),
}));
```

## Middleware

### devtools
[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja)でZustandの状態を確認できるようにする。  
Storeに `zustand/middleware`からimportした`devtools`を追加する。

``` ts
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
   bears: number;
}

type Action = {
  increase: (by: number) => void
}

export const useStore = create<State & Action>()(
  devtools((set) => ({
    bears: 0,
    increase: (by) => set((state) => ({ bears: state.bears + by}))
  }))
)
```

### persist
ストアデータを保存できるため、そのデータが永続化される。

```ts
import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useBearStore = create(
  persist(
    (set, get) => ({
      bears: 0,
      addABear: () => set({ bears: get().bears + 1 }),
    }),
    {
      name: 'food-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
```