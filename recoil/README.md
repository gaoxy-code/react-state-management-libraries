# Recoil

- [docs](https://recoiljs.org/)
- [github](https://github.com/facebookexperimental/Recoil)

## Tips

### 導入
- Atom: データの保管場所
- Selector: Atomを元にデータの派生状態を取得する関数

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