import React from 'react';
import logo from './logo.svg';
import './App.css';

// ***** BY Default*****

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// ****End of default ********
class Great extends React.Component{
  render(){
    // with the help of Props get the object
    
    // const name = this.props.name;  
    // const college = this.props.college;
      // or
    const {name,college} = this.props;  
    return(
      <div>
        Hello {name}, you are from {college}
      </div>
    );
  }
}
function GreatFuntional(props){
  const {name, college} = props;
  return(
    <div>
      Hello {name}, You are form {college}
    </div>
  );
}
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 3
    };
  }
incrementCount(){
  // this.state.count = this.state.count + 1;  // This not work
  this.setState({
    count: this.state.count+1
  });
}
  render() {
    const {count} = this.state;
    return (
      <div>
        <div>You are clicked {count} times</div>
        <button onClick={this.incrementCount.bind(this)}>Increament Counter</button>
      </div>
    );
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Great name="Rakesh" college="NIT PATNA"/>
        <Great name="Vinay" />
        <Great name="Suman" />
        <GreatFuntional name="Karshu" college="G.R.V" />
        <Counter />
      </div>
    );
  }
}
function AppFunctional(){
  return (
    <div>
      Hello world from the functional Component!
    </div>
  )
}

export default App;
// export default AppFunctional;
