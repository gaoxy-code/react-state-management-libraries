# Jotai

- [docs](https://jotai.org/)
- [github](https://github.com/pmndrs/jotai)

## Tips

### [Provider](https://jotai.org/docs/core/provider)

- Providerの中で使用されたatomはProviderの中で閉じられる

### Atom Creator

単にatomまたはatomのセットを返す関数を意味する。
これにより、最初のatomの状態を更新するためだけに別のatomを設定する必要があるという典型的な作業が回避される。

```ts
const createCountIncAtoms = (initialValue) => {
  const baseAtom = atom(initialValue)
  const valueAtom = atom((get) => get(baseAtom))
  const incAtom = atom(null, (get, set) => set(baseAtom, (c) => c + 1))
  return [valueAtom, incAtom]
}
```

### useAtomValue / useSetAtom
- useAtomValue  
  読み取り専用のatomにアクセスできる。
- useSetAtom  
  atomの値を読み込まずに更新する必要がある場合に使用する。