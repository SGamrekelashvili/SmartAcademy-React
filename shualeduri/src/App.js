import React from 'react';
import Parent1 from './components/Parent1';
import Parent2 from './components/Parent2';

class App extends React.Component {

  render(){
    return (
      <div>
        <Parent1 />
        <Parent2 />
    </div>
    );
  }}

export default App;
