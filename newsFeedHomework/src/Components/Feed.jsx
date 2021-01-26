import React, {Component} from 'react';
import Post from './Post';
import PostForm from './PostForm'

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: JSON.parse(localStorage.getItem('AllPosts')) || [],
    }

    this.handleNewPost = this.handleNewPost.bind(this);
  }

  handleNewPost(post) {
    var posts = this.state.posts.concat([post]);
    console.log(posts)
    console.log(this.state.posts)
    this.setState({
      posts: posts
    });
    localStorage.setItem('AllPosts', JSON.stringify(posts));
  }


  render() {
    const posts = this.state.posts.reverse().map((post, index) =>
      <Post key={index} value={post} />
    );
    return (
      <>
        <PostForm onSubmit={this.handleNewPost} />
        {posts}
      </>
    )
  }
}
export default Feed