const { of, asapScheduler } = require('rxjs');

console.log('BEFORE call subscribe()');

of(1, 2, 'a', 3, 4, ['array1', 'array2'], asapScheduler).subscribe(
    s => console.log(`next ${x}`),
    err => console.error(err.message),
    () => console.log('completed')
);

console.log('AFTER call subscribe()');