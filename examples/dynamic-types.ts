class Observable<T> {
  constructor(public value: T) {}
}

const x: Observable<number> = new Observable(2);
const y: Observable<boolean> = new Observable(true);
const z: Observable<string> = new Observable("stringy");

interface someInterface {
  aDefinedKeyword: boolean;
  attributes: {
    [key: string]: string;
  };
}

const someImplementation: someInterface = {
  aDefinedKeyword: true,
  attributes: {
    someKeyword2: "some value2",
    someKeyword3: "some value3",
  },
};
