import './HotBtn.css';
import { useState } from 'react';

function HotBtn() {
  const [count, setCount] = useState(0);
  let bgColor = '';
  if (count >= 18) {
    bgColor = 'nuclear';
  } else if (count >= 15) {
    bgColor = 'hot';
  } else if (count >= 12) {
    bgColor = 'warm';
  } else if (count >= 9) {
    bgColor = 'tepid';
  } else if (count >= 6) {
    bgColor = 'cool';
  } else if (count >= 3) {
    bgColor = 'cold';
  }
  console.log(count);
  return (
    <>
      <button
        className={`hot-button ${bgColor}`}
        onClick={() => setCount(count + 1)}>
        Hot Button!
      </button>
      <button className="count-btn">{count} Clicks!</button>
    </>
  );
}

export default HotBtn;
