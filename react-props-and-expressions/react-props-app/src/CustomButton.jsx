import './App.css';
function CustomButton({ text, color }) {
  return (
    <>
      <button style={{ backgroundColor: color }}>{text}</button>
    </>
  );
}
export default CustomButton;
