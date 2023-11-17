// type LocationState = {
//   state: "Loading" | "Success" | "Error";
//   coords?: { lat: number; lon: number };
//   error?: { message: string }
// }

type LocationState<T extends string = "Loading" | "Success" | "Error"> =
  T extends "Success"
    ? { state: T; coords: { lat: number; lon: number } }
    : T extends "Error"
    ? { state: T; error: { message: string } }
    : {
        state: "Loading";
      };

type LocationStateLoading = LocationState<"Loading">;
type LocationStateSuccess = LocationState<"Success">;
type LocationStateError = LocationState<"Error">;

function printLocation(location: LocationState) {
  switch (location.state) {
    case "Loading":
      console.log(location.state);
      break;
    case "Success":
      console.log(location.coords.lat, location.coords.lon);
      break;
    case "Error":
      console.log(location.error.message);
      break;
  }
}
printLocation({ state: "Error", error: { message: "Oops" } });
printLocation({ state: "Success", coords: { lat: 12312, lon: 321312 } });
printLocation({ state: "Loading" });

type Babaka = {
  alpha: string;
  omega: { age: 500; velocity: number };
};

type BabagaGik = {
  omega: { age: 300; velocity: number };
};

// type ExcludeOmega<T extends unknown, U extends unknown> = T extends { [K keyof U] : infer K } ? K: never;

// type OnlyAlpha = ExcludeOmega<Babaka, BabagaGik>;

type AcceptOnlyStrings<T> = T extends [any, infer D extends string]
  ? { [key: number]: D }
  : never;
type Check = AcceptOnlyStrings<["123", "321"]>;

const a: Check = {
  0: "321",
};

type Check4 = AcceptOnlyStrings<"123">;
type Check2 = AcceptOnlyStrings<{ wtf: "123" }>;
type Check3 = AcceptOnlyStrings<{ wtf: 321 }>;

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

console.log(merge({ a: 1, b: 2 }, { c: 3 }));

enum Pages {
  "/",
  "/about",
}

const getPage = (page: unknown): string => {
  if (typeof page === "string") return page;

  if (typeof page === "number") return page.toString();

  return "/";
};

type User = {
  name: string;
  email: string;
  address?: {
    street: string;
    apartmentNumber: number;
  };
};

const kiril: User = {
  name: "Kirill",
  email: "kirill.goit@gmail.com",
};

function funcDoMagic(arg: string | number): string | number {
  if (typeof arg === "string") {
    return "Hello, " + arg;
  }
  if (typeof arg === "number") {
    return arg * arg;
  }

  return arg;
}

console.log(funcDoMagic("Maxim"));
console.log(funcDoMagic(35));

type ParametersForCucumber = {
  calories: 35;
  mass: 234;
  color: "green";
};

type ParametersForCoconut = {
  calories: 12;
  mass: 1200;
  color: "brown";
};

type Vegetable<T> = {
  name: "cucumber" | "coconut" | "peach" | "potato";
  parameters: T;
};

const coconut: Vegetable<ParametersForCoconut> = {
  name: "coconut",
  parameters: {
    calories: 12,
    mass: 1200,
    color: "brown",
  },
};

const cucumber: Vegetable<ParametersForCucumber> = {
  name: "cucumber",
  parameters: {
    calories: 35,
    mass: 234,
    color: "green",
  },
};
