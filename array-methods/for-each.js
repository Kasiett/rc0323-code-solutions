const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('In order:');
values.forEach((index) => console.log(index));

console.log('Reverse order: ');
values.forEach((n, index) => {
  const reverseIndex = values.length - 1 - index;
  console.log(values[reverseIndex]);
});
