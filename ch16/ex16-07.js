// 일반 객체의 __proto__는 접근자 프로퍼티
Object.getOwnPropertyDescriptor(Object.prototype, '__proto__');
// { get: f, set: f, enumerable: false, configurable: ture }

// 함수 객체의 prototype은 데이터 프로퍼티
Object.getOwnPropertyDescriptor(function () {} , 'prototype');
// { value: { ... }, writable: true, enumerable: false, configurable: false }