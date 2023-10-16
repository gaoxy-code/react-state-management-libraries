# Zustand

- [github](https://github.com/pmndrs/zustand)
- [docs](https://docs.pmnd.rs/zustand/)

## Memo
### Merit
シンプルで使いやすく、他の状態管理ライブラリと比べてもコード量が少ない。

## Tips

### Middleware

#### devtools
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