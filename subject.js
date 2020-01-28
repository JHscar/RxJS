const { Subject } = require('rxjs');

const subject = new Subject();

subject.subscribe({
    next: function (v) {
        console.log('observerA:' + v);
    }
});

subject.subscribe({
    next: function (v) {
        console.log('observerB:' + v);
    }
});

subject.next(1);
subject.next(2);

// 서브젝트는 옵저버블의 속성이 있으므로 subscribe 함수를 두 번 호출했고, next 함수를 바로 호출할 때마다 해당 서브젝트를 구독하는 옵저버들은 같은 결과를 전달받을 수 있다.
// 즉, subject 변수는 값을 보내주고 알려주는 형태의 옵저버블이자 옵저버고, observerA 와 B는 이를 구독하는 옵저버다. 이런 멀티캐스팅 방식은 EventEmitter와 비슷하다고도 볼 수 있다.