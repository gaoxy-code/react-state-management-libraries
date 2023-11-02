# Recoil

- [docs](https://recoiljs.org/)
- [github](https://github.com/facebookexperimental/Recoil)

## Tips

### 導入
#### RecoilRootの作成
Recoil による状態管理をアプリケーションで使用するには、RecoilRootというコンポーネントで囲む必要ある。
```ts
import { RecoilRoot } from 'recoil';
import { Counter } from './components/Counter'

export const App = () => {
  return (
    <RecoilRoot>
      <Counter />
    </RecoilRoot>
  )
}
```
#### Atomsの作成
Atom: データの保管場所
Reduxで言うところのStoreに相当する。
Reduxはアプリケーション単位での状態管理であるのに対し、Recoilは一つ一つが状態を保持している。

```ts
import { atom } from 'recoil';

export const counterAtom = atom({
  key: 'Counter',
  default: 0
})
```
Atomsは一意のKeyを持っている。

#### Selectorsの作成
Selector: Atomを元にデータの派生状態を取得する関数
Atomからデータを加工する関数として定義する。
`get()`メソッドにAtomのデータを元に加工計算を行う。

```ts
import { selector } from 'recoil';
import { listAtom } from './listAtom'

export const listSelector = selector({
  key: 'listSelector',
  get: ({get}) => {
    const list = get(listAtom);
    const total = list.length;
    const completed = list.filter((l) => l.status === 'completed').length;

    return {
      list,
      total,
      completed
    }
  }
})
```

コンポーネント側では`useRecoilValue()`メソッドを使って、セレクターからの値を使用する。

```ts
import { useRecoilValue } from 'recoil';
import { listSelector } from '../atoms/listSelector';

export const List = () => {
  const { list, total, completed } = useRecoilValue(listSelector);

  return (
    <div>
      <div>{`${completed}/${total}`}</div>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  )
}
```