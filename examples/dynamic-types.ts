class Observable<T> {
  constructor(public value: T) {}
}

const x: Observable<number> = new Observable(2);
const y: Observable<boolean> = new Observable(true);
const z: Observable<string> = new Observable("hello");
