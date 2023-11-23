# Valtio

* [docs](https://valtio.pmnd.rs/docs/introduction/getting-started)
* [github](https://github.com/pmndrs/valtio)

## Tips

### Nested proxies
Proxyは他のProxyオブジェクトにネストすることができ、全体として更新することができる
```ts
import { proxy, useSnapshot } from 'valtio'

const personState = proxy({ name: 'Taro', role: 'admin' })
const authState = proxy({ status: 'loggedIn', user: personState })

authState.user.name = 'Hanako'
```

### Usage of useSnapshot
Reactコンポーネント側でstateの値を参照したい場合はuseSnapshotで生成されたもののみ使う。  
useSnapshotで生成されるものはreadonlyなstateになる。
そうすることでコンポーネント側ではimmutableなstateのみを取り扱うことができる


### Subscribe
```ts
import { proxy, subscribe } from 'valtio'

const state = proxy({ count: 0 });

// コールバックを登録する
subscribe(state, () => console.log("changed"));

// changedが表示される
state.count++;
```