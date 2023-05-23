function CustomButton({ text, color, onCustomClick }) {
  return (
    <>
      <button
        onClick={onCustomClick}
        style={{
          backgroundColor: color,
          borderRadius: '10px',
          color: 'white',
          padding: '10px 20px',
          margin: '10px',
        }}>
        {text}
      </button>
    </>
  );
}

export default CustomButton;
