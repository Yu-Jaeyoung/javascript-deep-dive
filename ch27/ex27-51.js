class Stack {
    #array; // private class member

    constructor(array = []) {
        if (!Array.isArray(array)) {
            throw new TypeError(`${array} is no an array`);
        }
        this.#array = array;
    }

    push(value) {
        return this.#array.push(value);
    }

    pop() {
        return this.#array.pop();
    }

    entries() {
        return [...this.#array];
    }
}

const stack = new Stack([1, 2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());