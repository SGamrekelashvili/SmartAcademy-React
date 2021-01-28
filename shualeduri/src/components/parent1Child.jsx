
import React from 'react'
import './css.css'

class ParentoneChild extends React.Component {

    click =() =>{
        this.props.onColorChange('blue')
    }
    componentDidMount(){
        console.log(this.props.color)
    }
  render(){
     return (
         <div class="all">
       <div class="one">
       <span onClick={() => this.click()}  style={{ backgroundColor: this.props.color }}>
       </span>
      </div>
      <div class="two">
      <span onClick={() => this.click()}  style={{ backgroundColor: this.props.color }}></span>
      <span onClick={() => this.click()}  style={{ backgroundColor: this.props.color }}></span>
      </div>
       </div>
     );
  }}

export default ParentoneChild;
