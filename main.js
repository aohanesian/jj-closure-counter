`use strict`;

const createCounter = (number = 0) => {
    let count = number;
    return {
        increase: () => {
            return count = count + 1;
        },
        value: () => {
            return count;
        },
        decrease: () => {
            return count = count - 1;
        },
    }
}

const counter1 = createCounter(1);

console.log(counter1.increase());
console.log(counter1.increase());
console.log(counter1.value());

const counter20 = createCounter(20);

console.log(counter20.decrease());
console.log(counter20.decrease());
console.log(counter20.value());