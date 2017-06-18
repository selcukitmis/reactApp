const asyncFn = () =>
  new Promise((resolve, reject) => {
    if (resolve) {
      setTimeout(() => {
        resolve('asenkron response');
      }, 3000);
    } else {
      reject('err ' + reject);
    }
  });

asyncFn()
  .then(output => {
    console.log(output);
  })
  .catch(err => {
    console.log(err);
  });

const asyncFn2 = () =>
  new Promise((resolve, reject) => {
    if (resolve) {
      setTimeout(() => {
        resolve('asenkron response2');
      }, 1000);
    } else {
      reject('err ' + reject);
    }
  });

asyncFn2()
  .then(output => {
    console.log(output);
  })
  .catch(err => {
    console.log(err);
  });

// birden fazla promise çalıştırmak için // tüm promisler resolve olursa then çalışır, herhangi biri reject olursa catch çalışır

Promise.all([asyncFn(), asyncFn2(), 'Selam']).then(results => {
  console.log(results);
});
