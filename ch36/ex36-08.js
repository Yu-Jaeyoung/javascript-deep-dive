// url을 파싱하여 protocol, host, path 프로퍼티를 갖는 객체를 생성해 반환
function parseURL(url = '') {
    // '://' 앞의 문자열(protocol)과 '/' 이전의 '/'로 시작하지 않는 문자열(host)과
    // '/' 이후의 문자열(path)을 검색
    const parsedURL = url.match(/^(\w+):\/\/([^/]+)\/(.*)$/);
    console.log(parsedURL);

    if (!parsedURL) return {};

    // 배열 디스트럭처링 할당을 사용하여 이터러블에서 필요한 요소만 추출
    const [, protocol, host, path] = parsedURL;
    return {protocol, host, path};
}

const parsedURL = parseURL('https://developer.mozila.org/ko/docs/Web/JavaScript');
console.log(parsedURL);