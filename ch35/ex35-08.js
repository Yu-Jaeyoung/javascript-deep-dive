// Rest 파라미터는 인수들의 목록을 배열로 전달받음
function foo(...rest) {
    console.log(rest);
}

// 스프레드 문법은 배열과 같은 이터러블을 펼쳐서 개별적인 값들의 목록을 만듬
foo(...[1, 2, 3]);