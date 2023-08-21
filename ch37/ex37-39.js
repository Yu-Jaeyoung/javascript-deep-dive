const map = new Map([['key1', 'value1']]);

// 존재하지 않는 키 'key2'로 요소를 삭제하려하면 에러없이 무시됨
map.delete('key2');
console.log(map);