const { Observable } = require('rxjs');
const { map, toArray } = require('rxjs/operators');

const observableCreated$ = Observable.create(function (observer) {
    console.log('Observable BEGIN');
    const arr = [1, 2];
    for (let i = 0; i < arr.length; i++) {
        console.log(`current array: arr[${i}]`);
        observer.next(arr[i]);
    }
    console.log('BEFORE complete');
    observer.complete();
    console.log('observable END');
});

function logAndGet(original, value) {
    console.log(`original: ${original}, map value: ${value}`);
    return value;
}

observableCreated$.pipe(
    map(function (value) {
        return logAndGet(value, value * 2);
    }),
    map(function (value) {
        return logAndGet(value, value + 1);
    }),
    map(function (value) {
        return logAndGet(value, value * 3);
    }),
    toArray()
).subscribe(function (arr) { console.log(arr); });

// map 연산자로 값을 감쌀 때마다 새로운 옵저버블 객체만 생성한다.
// 새로 생성한 옵저버블은 구독할 때까지 실행되지 않으므로 배열이 생성될 때처럼 실제 연산자가 동작하지 않는다.