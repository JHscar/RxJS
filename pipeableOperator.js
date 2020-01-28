// 파이퍼블 연산자는 생성 함수로 만들어진 옵저버블 인스턴스를 pipe 함수 안에서 다룰 수 있는 연산자다.
// pipe 함수는 인자로 사용한 연산자를 적용한 결과의 옵저버블 인스턴스를 리턴하기 때문이다.

const { range } = require('rxjs');
const { filter, map } = require('rxjs/operators');

let divisor = 2;
setInterval(function () {
    divisor = (divisor + 1) % 10;
}, 500);

range(1, 10).pipe(
    filter(function (value) {
        return value % divisor == 0;
    }),
    map(function (value) {
        return value + 1;
    })
).subscribe((value) => console.log(value));