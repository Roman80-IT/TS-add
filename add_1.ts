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

class House {
  street: string;

  constructor(n: string) {
    this.street = n;
  }

  showAddress(this: House) {
    console.log("Address: " + this.street);
  }
}

const house = new House("Middle-earth");

const houseCopyError = { showAddress: house.showAddress };
// houseCopyError.showAddress();

const houseCopy = { street: "Dummy", showAddress: house.showAddress };
houseCopy.showAddress();

function merge<T extends object, U extends object>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

// console.log(merge({ a: 1, b: 2 }, { c: 3 }))

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

function func<T>(arg: T): T {
  return arg;
}
