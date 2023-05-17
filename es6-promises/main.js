import takeAChance from './take-a-chance.js';
takeAChance('Kasiet')
  .then((res) => {
    console.log(res);
  })
  .catch((error) => {
    console.log(error.message);
  });
