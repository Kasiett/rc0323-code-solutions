import { useState } from 'react';

function ToggleButton({ color, text }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
  }
  console.log(isClicked);
  return (
    <>
      <button
        onClick={handleClick}
        style={{ backgroundColor: isClicked ? color : 'white', margin: '5px' }}>
        {text}
      </button>
    </>
  );
}

export default ToggleButton;
