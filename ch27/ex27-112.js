class Users {
    constructor() {
        this.users = [
            {id: 1, name: "lee"},
            {id: 2, name: "kim"},
        ];
    }

    // 요소 추출
    findById(id) {
        // id가 일치하는 사용자만 반환
        return this.users.filter(user => user.id === id);
    }

    // 요소 제거
    remove(id) {
        // id가 일치하는 사용자를 제거
        this.users = this.users.filter(user => user.id !== id);
    }

}

const users = new Users();

let user = users.findById(1);
console.log(user);

users.remove(1);

user = users.findById(1);
console.log(user);