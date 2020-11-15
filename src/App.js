// function App() {
//   return (<div><p>Hello, world!</p></div>);
// }
import React, { Component } from 'react';
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => { console.log("I am clicked!") }} />
      </React.Fragment>
    );

    // return (
    //   <div>
    //     <label htmlFor="bar">bar</label>
    //     <input type="text" onChange={() => { console.log("I am clicked!") }} />
    //   </div>
    // );

    // return <input type="text" onClick={() => { console.log("Hi!") }} />

    // return <input type="text" onClick={() => { console.log("I am clicked") }} />

    // const greeting = "Hi, Tom!";
    // const dom = <h1 className="foo">{greeting}</h1>
    // return dom;

    //return <h1>Hello, world!</h1>;
    //return null;
  }
}

export default App;
