let currentCount = 3;

const countDown = setInterval(() => {
  if (currentCount === 0) {
    console.log('Blast off!');
    clearInterval(countDown);
  } else {
    console.log(currentCount);
    currentCount--;
  }
}, 1000);
