import './App.css';
import CustomButton from './CustomButton';

function handleCustomClick(color) {
  alert(`Clicked ${color} Fancy!`);
}

function App() {
  return (
    <div className="App">
      <CustomButton
        text="I"
        color="red"
        onCustomClick={() => handleCustomClick('red')}
      />
      <CustomButton
        text="know"
        color="green"
        onCustomClick={() => handleCustomClick('green')}
      />
      <CustomButton
        text="React"
        color="blue"
        onCustomClick={() => handleCustomClick('blue')}
      />
    </div>
  );
}

export default App;
