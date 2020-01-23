const { Observable } = require('rxjs');

const observableCreated$ = Observable.create(function subscribe(observerr) {
    // interval ID 자원 추적
    const intervalID = setInterval(function () {
        observerr.next('hi');
    }, 1000);

    // interval ID 자원을 해제하고 재배치하는 방법을 제공
    return function unsubscribe() {
        clearInterval(intervalID);
    };
});