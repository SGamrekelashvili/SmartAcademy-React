

import React, {Component} from 'react';
import {PostsP,Img,Section,Sectiondiv,PostTextArea} from './Styles'

class Post extends Component {
    render() {
      return (
        <Section>
        <Sectiondiv>
        <Img src={this.props.value.key} alt="ERROR" />
          <PostTextArea>{this.props.value.content}</PostTextArea>
          </Sectiondiv>
      </Section>
      )
    }
  }
  export default Post