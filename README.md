## Concept
> Recoil creates a data-flow graph that flows from atoms (shared state) through selectors (pure functions) & down into React components.

### Atom
#### Define
Atom represents a piece of state that is **updateable & subscribable**.
*When an atom is updated, each subscribed component is re-rendered with the new value.*

#### Syntax
Atoms are created via `atom()`:
##### Init
```js
const starState = atom({
  key: 'starState', // GLOBALLY unique
  default: 30,
})
```
##### Read AND edit an atom
```js
function StarButton() {
  const [stars, setStars] = useRecoilState(starState);
  return (
    <button onClick={() => setStars(stars => stars + 1)}> {{ stars }} </button>
  );
}
```
- Components that read the value of an atom are **IMPLICITLY subscribed** to that atom *(so any atom updates will result in a re-render of all components subscribed to that atom).*

### Selectors
#### Define
A selector is a `PURE function` that accepts 
A selector represents a piece of **derived state** *(transformation of state)*.
Derived state as the output of passing state to a `PURE function` that modifies the given state *(besides `atom`, input can be `other selectors`.)*

- *When the upstream atoms or selectors are updated, `selector()` will be re-evaluated.*
- *When the selectors change, components subscribing to selectors will be re-rendered (atom as well).*

#### Syntax
##### Init
```js
const starLabelState = selector({
  key: 'starLabelState',
  get: ({get}) => {
    const stars = get(starState);
    return `${stars} px`;
  },
});
```
- The `get` property is the function that is to be computed. Via `get` argument passed to it, the value of atoms and other selectors  can be accessed.
- Whenever it accesses another atom or selector, a dependency relationship is created such that updating the other atom or selector will cause this one to be recomputed.

##### Read
```js
function StarButton() {
  const starLabelState = useRecoilValue(starLabelState);
  return (<span>Current font size: ${ starLabelState }</span>);
}
```
**Notes:**:
- In this case, NOT use `useRecoilState()` because it is a **certain hooks** that `ONLY` work with `writable state`.
+ All atoms are writable state
BUT
+ Some selectors are considered writable state (selectors that have both a `get` and `set` property)

### Common API
`useRecoilState()`*(a getter function)*, `useSetRecoilState()` *(a setter function)*, `useRecoilValue()`

