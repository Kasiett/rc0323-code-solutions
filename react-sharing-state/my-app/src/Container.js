import React, { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div>
      <div>{items[currentIndex]}</div>
      <div>
        <CustomButton
          text="Prev"
          onClick={() =>
            setCurrentIndex((currentIndex - 1 + items.length) % items.length)
          }
        />
        <Indicators
          count={items.length}
          setCurrentIndex={setCurrentIndex}
          currentIndex={currentIndex}
        />
        <CustomButton
          onClick={() => setCurrentIndex((currentIndex + 1) % items.length)}
          text="Next"
        />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ onClick, text, onSelect }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: onSelect ? 'lightblue' : 'white' }}>
      {text}
    </button>
  );
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ count, currentIndex, setCurrentIndex }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton
        onClick={() => setCurrentIndex(i)}
        onSelect={currentIndex === i}
        key={i}
        text={i}
      />
    );
  }
  return <div>{buttons}</div>;
}
