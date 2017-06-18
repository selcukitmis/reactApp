const fn = (p1, p2) => {
  console.log(p1);
  console.log(p2);
};

fn(1, 2);

const add = (p1, p2) => p1 + p2;
console.log(add(2, 3));

const pow = param1 => param1 * param1;

console.log(pow(3));

const returnObj = () => ({ key: 1, value: 'ss' });

console.log(returnObj());

const fn2 = (param1 = 'value', ...rest) => ({
  key1: param1,
  key2: 'value',
  rest,
});

const result = fn2((param1 = 'deneme'), 'a', 'b', 'c', 1, 2, 3);
const toJson = JSON.stringify(result, null, 2);
console.log(toJson);
