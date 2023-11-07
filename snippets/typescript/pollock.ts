type Obj = {
    id: string;
    name: string;
    age: number;
}

// never disappears in the final type
type Example2 = "id" | "name" | never;

// filter out the types which are not string with never
type Example3 ={
    [K in keyof Obj]: Obj[K] extends string ? K : never
}

// filter out the keys which are not string - removing types with never
type Example ={
    [K in keyof Obj]: Obj[K] extends string ? K : never;
}[keyof Obj]

// type helper
type ExtractStringKeys<TObj> = {
    [K in keyof TObj]: TObj[K] extends string ? K : never;
}[keyof TObj]

// IIMT
type Fruit = "apple" | "orange" | "banana";
 
// we want:



export type FruitInfo = {
    [F in Fruit]: {
        thisFruit: F;
        allFruit: Fruit;
    };
};

/**
 * | {
 *      thisFruit: 'apple';
 *      allFruit: 'apple' | 'orange' | 'banana';
 * }
 * | {
 *      thisFruit: 'banana';
 *      allFruit: 'apple' | 'orange' | 'banana';
 * }
 * | {
 *      thisFruit: 'orange';
 *      allFruit: 'apple' | 'orange' | 'banana';
 * }
 */

export type FruitInfoDiscriminated = {
    [F in Fruit]: {
        thisFruit: F;
        allFruit: Fruit;
    };
}[Fruit];

/**
 * | {
 *      thisFruit: 'apple';
 *      allFruit: 'orange' | 'banana';
 * }
 * | {
 *      thisFruit: 'banana';
 *      allFruit: 'apple' | 'orange';
 * }
 * | {
 *      thisFruit: 'orange';
 *      allFruit: 'apple' | 'banana';
 * }
 */

export type FruitInfoDiscriminatedOther = {
    [F in Fruit]: {
        thisFruit: F;
        allFruit: Exclude<Fruit, F>;
    };
}[Fruit];