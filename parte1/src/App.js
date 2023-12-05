import './App.css';
import Mensaje from './Mensaje.js';

const Description = () => {
  return <p>Esta es la app del curso Fullstack boootcamp</p>
}

const App = () => {
  const a = 2;
  const b = 3;

  return (
    <div className="App">
      <Mensaje color='yellow' message='Estamos tabajando'/>  
      <Mensaje color='red' message='en un curso'/> 
      <Mensaje color='blue' message='React'/> 
      <Description />
      <div>
        <p>el resultado es:</p>
        {a + b}
        {+new Date()}
      </div>

    </div>
  );
}

export default App;
