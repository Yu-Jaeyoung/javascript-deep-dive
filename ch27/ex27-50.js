const Stack = (function () {
    function Stack(array = []) {
        if (!Array.isArray(array)) {
            // 47장 예외 처리
            throw new TypeError(`${array} is no an array`);
        }
        this.array = array;
    }

    Stack.prototype = {
        constructor: Stack,
        // 스택의 가장 마지막에 데이터를 밀어 넣음
        push(value) {
            return this.array.push(value);
        },

        // 스택의 가장 마지막 데이터, 즉
        // 가장 나중에 밀어 넣은 최신 데이터를 꺼냄
        pop() {
            return this.array.pop();
        },

        // 스택의 복사본 배열을 반환
        entries() {
            return [...this.array];
        }
    };

    return Stack;
}());

const stack = new Stack([1, 2]);
console.log(stack.entries());

stack.push(3);
console.log(stack.entries());

stack.pop();
console.log(stack.entries());