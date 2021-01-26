import React, {Component} from 'react';
import {Button,Section,Sectiondiv,Img,Textarea} from './Styles'

class PostForm extends Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);

    }

  
    handleSubmit(event) {
      const context =this.content.value;
      const file = document.getElementById('idexample');
      console.log(file.files)
      let files = file.files;
      for (var i = 0; i < files.length; i++) {
  
        let file = files[i];
      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      // on reader load somthing...
      reader.onload = () => {
        this.props.onSubmit({
          content: context , key: reader.result
     });
    }}
    this.content.value = '';
    file.value="";
    event.preventDefault();

  }


    render() {
      return (
        <Section>
        <Sectiondiv class="text">
     <form onSubmit={this.handleSubmit}>
          <Img src="http://placehold.it/100/100"/>
          <Textarea ref={(input) => this.content = input} placeholder="Post, What's In Your Mind"></Textarea>
          <Button type="submit" value="post">Post</Button>
          <input required id="idexample" type="file"         />
      </form>
        </Sectiondiv>
      </Section>
      )
    } 
  }
  export default PostForm
  