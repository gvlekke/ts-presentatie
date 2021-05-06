// basic types
const typedString: string = "this is a typed variable";
const typedBoolean: boolean = true;

// What about this?
const typedString2: String = "this is a typed variable";
const typedBoolean2: Boolean = true;

interface SomeTypeOfAnObject {
  var1: string;
  var2: number;
  var3: boolean;
}

const typedObj: SomeTypeOfAnObject = {
  var1: "this is a string",
  var2: 3,
  var3: true,
};

type Username = string;
type Password = string;

interface User {
  username: Username;
  password: Password;
}

const user: User = {
  username: "test" as Username,
  password: "test" as Password,
};
