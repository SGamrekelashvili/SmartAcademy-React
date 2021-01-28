
import React from 'react';
import './css.css';
import ParentoneChild from './parent1Child';


class Parent1 extends React.Component {
    constructor(props){
        super(props)
          this.state = {
            backgroundColor: 'red',
          }
      }

    onChange = (newName) =>{ 
        console.log(newName)
        this.setState({ backgroundColor : 'blue' })
        setTimeout(() => {  this.setState({ backgroundColor : 'red' }) }, 500);
    }

    componentDidMount(){
        console.log(this.props.color)
    }
  render(){
     return (<>
    <ParentoneChild onColorChange={this.onChange} color={this.state.backgroundColor} />
    </>
     );
  }}

export default Parent1;
