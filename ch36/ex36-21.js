const user = {
    name: 'Yu',
    address: {
        zipCode: '03068',
        city: 'Seoul'
    }
};

// address 프로퍼티 키로 갹채룰 추출하고 이 객체의 city 프로퍼티 키로 값을 추출
const {address: {city}} = user;
console.log(city)