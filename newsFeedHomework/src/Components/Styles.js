import styled from 'styled-components'


const Button = styled.button`
    float: right;
  margin: 15px 10px auto auto;
  border: none;
  background-color: #0077CC;
  color: #fff;
  font-weight: bold;
  padding: 10px 15px;
  border-radius: 3px;
  font-size: 16px;  
`
const Section = styled.section`
    width: 100%;
    display: flex;
    position: relative;
`
const Sectiondiv = styled.div`
  width: 500px;
  margin: 30px auto;
  background-color: #fff;
  overflow: hidden;
  padding: 20px;
  border-radius: 3px;
  box-shadow: 1px 1px 1px rgba(0,0,0,.3);
  z-index: 3;
  position: relative;
`

const Img = styled.img`
  float: left;
  width: 60px;
  height: 60px;
`

const Textarea = styled.textarea`
  width: 400px;
  height: 150px;
  border: none;
  padding: 5px 10px;
  font-family: arial;
  resize: none;
  outline: none;
  border-bottom: 2px solid #0077CC;
`

const Overlay = styled.div`
            position: relative;
            width: 30rem;
            height: 20rem;
            background-color: #2196F3;
            display: flex;
    border: solid 2px red;
    align-items: center;
    margin: auto;
`
const PostsP = styled.p`
  ${'' /* background-color: #fff;
  width: 500px;
  margin: 10px auto;
  padding: 10px;
  color: #333;
  box-shadow: 1px 1px 1px rgba(0,0,0,.3);
  border-radius: 3px; */}
`

const PostsDiv = styled.div`
display:inline-block;
position:absolute
`
const PostTextArea = styled.p`
    width: 100%;
    overflow: hidden;
    height: auto;
    border: none;
    padding: 4px 5px;
    font-family: arial;
    resize: none;
    word-wrap: break-word;
    white-space: -moz-pre-wrap;
    white-space: pre-wrap;
    outline: none;
    border-bottom: 2px solid #0077CC;
    text-align: center;
`

export {Button,Section,Sectiondiv,Img,Textarea,Overlay,PostsP,PostTextArea}