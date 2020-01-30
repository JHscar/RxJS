// create 함수는 옵저버블이 어떤 작업을 할지 정의해 생성한다.
// Observable 클래스에 속해 있는 기본 함수이기도 하다.

const { Observable } = require('rxjs');

const observable1to10$ = Observable.create(function (observer) {
    console.log('[observable1to10] BEGIN subscribe function');

    for (let value = 1; value <= 10; value++) {
        observer.next(value);
    }

    observer.complete();

    // 실행되지 않음
    observer.next(11);
    observer.error(new Error('error'));
    observer.complete();

    console.log('[observable1to10] END subscribe function');

    return function () {
        console.log('observable1to10 unsubscribed');
    }

});

observable1to10$.subscribe(
    function next(value) {
        console.log(`next value: ${value}`);
    },
    function error(err) {
        console.error(`error`, err.message);
    },
    function complete() {
        console.log('complete!');
    }
);