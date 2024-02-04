import logo from './logo.svg';
import './App.css';
import CustomComponent from './CustomComponent';
import {useState} from 'react';

// const fn = function(){
  //   console.log(1+2);
  // }
  
  const App = () => {
    //let name = 'Bernard'; -> this will not work when we need things to change on the screen. so we use useState hook.
    const [color, setColor] = useState('green');
    const [name, setName] = useState('Bernard');
    // let clickCount = 0;
    let [clickCount, setClickCount] = useState(1);
    
    function increaseClickCount(){
      // setClickCount(clickCount + 1);
      console.log(clickCount);
      setClickCount((prev) => {
        return prev + 1;
      })
      // console.log(clickCount);
    }

  function makeRequest(){
    if(name === 'Bernard'){
      setName('Adi');
    }else{
      setName('Bernard');
    }
    console.log("This Button is Clicked and hence a request has been made..");
    console.log('name is ' + name);
  }

  function changeColor(){
    if(color === 'green'){
      setColor('blue');
    }else{
      setColor('green');
    }
  }


  return (
    <div className="App">
      <CustomComponent />
      <h1>{new Date().toLocaleTimeString()}</h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p style={{backgroundColor: 'red'}}> */}
        <p>
          Edit <code>src/App.js</code> Hello from KnowledgeHut!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={makeRequest}>
        {name}
      </button>
      <p style={{color: color}}>{name.length > 5 ? "Happy Sunday" : "Learning Day"}</p>
      <button onClick={changeColor}>Change Color To {color === 'green' ? 'BLUE' : 'GREEN'}</button>
      <button onClick={increaseClickCount}>CLICKER</button>
      <span>{clickCount}</span>
    </div>
  );
}

export default App;


// import './App.css';

// function One(){
//   return (<h1>One</h1>);
// }

// function Two(){
//   return (<h2>Two</h2>)
// }

// function Three(){
//   return (<h3>Three</h3>)
// }

// function App() {
//   return (
//     <div>
//       <Two />
//       <One />
//       <Three />
//     </div>
//   )
// }

// export default App




