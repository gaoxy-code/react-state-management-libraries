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
Snapshotsは読み取り専用
