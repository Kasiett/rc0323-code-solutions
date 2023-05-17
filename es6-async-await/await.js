import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

// function fetchOnce() {
//   return fetch('foo/bar.html')
//     .then((msg) => console.log(elapsed(), 'fetchOnce:', msg));
// }

async function fetchOnce() {
  const data = await fetch('foo/bar.html');
  console.log(elapsed(), 'fetchOnce:', data);
}

// function fetchSeveral() {
//   return fetch('foo1/bar.html')
//     .then((msg) => {
//       console.log(elapsed(), 'fetchSeveral1:', msg);
//       return fetch('foo2/bar.html');
//     })
//     .then((msg) => {
//       console.log(elapsed(), 'fetchSeveral2:', msg);
//       return fetch('foo3/bar.html');
//     })
//     .then((msg) => console.log(elapsed(), 'fetchSeveral3:', msg));
// }

async function fetchSeveral() {
  const msg1 = await fetch('foo1/bar.html');
  console.log(elapsed(), 'fetchSeveral1:', msg1);

  const msg2 = await fetch('foo2/bar.html');
  console.log(elapsed(), 'fetchSeveral2:', msg2);

  const msg3 = await fetch('foo3/bar.html');
  console.log(elapsed(), 'fetchSeveral3:', msg3);
}

// function fetchChained() {
//   return fetch('foo-chain/bar.html')
//     .then((msg1) => {
//       console.log(elapsed(), 'fetchChained1:', msg1);
//       return fetch(msg1);
//     })
//     .then((msg2) => {
//       console.log(elapsed(), 'fetchChained2:', msg2);
//       return fetch(msg2);
//     })
//     .then((msg3) => console.log(elapsed(), 'fetchChained3:', msg3));
// }

async function fetchChained() {
  const msg1 = await fetch('foo-chain/bar.html');
  console.log(elapsed(), 'fetchChained1:', msg1);

  const msg2 = await fetch(msg1);
  console.log(elapsed(), 'fetchChained2:', msg2);

  const msg3 = await fetch(msg2);
  console.log(elapsed(), 'fetchChained3:', msg3);
}

await fetchOnce();
await fetchSeveral();
await fetchChained();
