const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const filtered = numbers.filter((num) => num % 2 === 0);
console.log('even numbers:', filtered);

const hasDs = names.filter((n) => n.includes('d') || n.includes('D'));
console.log('Has D:', hasDs);
