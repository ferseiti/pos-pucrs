import './App.css';
import { HelloWorld } from './components/HelloWorld';
import { HelloWorldColorful } from './components/HelloWorldColorful';
import { MyButton } from './components/MyButton';

function App() {
  const handleClick = (event) => {
    alert(`Clicou ${event.currentTarget.id}`)
  };

  return (
    <>
      <HelloWorld />
      <HelloWorldColorful cor="yellow" nome="Jerônimo" />
      <div id='divApp' onClick={handleClick}>
        <MyButton />
      </div>
    </>
  );
}

export default App