const users = [{ id: 1, name: 'selçuk' }, { id: 2, name: 'Ahmet' }, { id: 3, name: 'Osman' }];

const user = users.find(item => item.id === 1);
console.log(user);
