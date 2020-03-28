import React  from 'react'; //{useState}

import './global.css';

import Routes from './routes'

function App() {
  return(
    <Routes/>
  );
  //const [counter, setCounter] = useState(0);
  // useState traz um Array de duas posições:
  // [valor, funcaoAtualizacao]
  // function Increment(){
  //   setCounter(counter + 1);

  // }

  // return (
  //   <div>
  //     <Header>Contador: {counter}</Header>
  //     <button onClick={Increment}>Incrementar</button>
  //   </div>
  // );
}

export default App;
