const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArr = arr.map(item => item * 2);

console.log(newArr);

const users = [{ id: 1, name: 'selçuk' }, { id: 2, name: 'Ahmet' }, { id: 3, name: 'Osman' }];

users.map(obj => {
  console.log(obj.name);
});

console.log(users.map(user => user));
