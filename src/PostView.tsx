import { Component } from "react";
import { Post } from "./interfaces";

interface PostViewProps {
  post: Post;
}

class PostView extends Component<PostViewProps> {
  render() {
    const { title, contents } = this.props.post;

    return (
      <div>
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: contents }}></div>
      </div>
    );
  }
}

export default PostView;
