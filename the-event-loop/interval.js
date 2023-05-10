let currentCount = 3;

const countDown = setInterval(() => {
  console.log(currentCount);
  currentCount--;
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(countDown);
  }
}, 1000);
