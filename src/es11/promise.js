const resolved1 = Promise.resolve(1);
const rejected = Promise.reject(0);
const resolved2 = Promise.resolve(-1);

const allSettledPromise = Promise.allSettled([resolved1, rejected, resolved2]);

allSettledPromise.then(function (results) {
  console.log(results);
});
