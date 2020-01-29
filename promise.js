const { Observable } = require('rxjs');

const observableCreated$ = Observable.create(function (observer) {
    try {
        observer.next(1);
        observer.next(2);
        throw ('throw err test');
    } catch (err) {
        observer.error(err);
    } finally {
        observer.complete();
    }
});

observableCreated$.subscribe(
    function next(item) { console.log(item); },
    function error(err) { console.log('error:' + err) },
    function complete() { console.log('complete') }
);

// 옵저버블은 옵저버로 값 1과2를 전달한 후 에러를 발생시키고 catch문을 이용해 옵저버에 있는 error 함수로 에러를 전달한다.
// 만약 에러가 발생하지 않았다면 complete 함수로 완료됨을 알 수 있다.
// 에러가 나서 finally 안의 코드가 실행되면 complete 함수는 호출된다.
// 하지만 이미 error 함수를 호출했으면 해당 옵저버블의 구독이 종료되었으므로 따로 complete 함수에 해당하는 콜백을 호출하지는 않는다.