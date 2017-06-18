const obj = {
  id: 1,
  value: 'foo',
};

//console.log(Object.entries(obj));

for (const [key, value] of Object.entries(obj)) {
  console.log(`Key: ${key} , Value: ${value}`);
}

// babel-node object.entries.js
