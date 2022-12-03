import { Component } from "react";
import { Post, Router } from "./interfaces";

interface PostItemProps {
  post: Post;
  router: Router;
}

interface PostItemState {
  time: number;
}

const getRandomTime = () => {
  return Math.floor(Math.random() * 20 + 10);
};

class PostItem extends Component<PostItemProps, PostItemState> {
  state = {
    time: getRandomTime(),
  };

  timerID: NodeJS.Timer | null = null;

  componentDidMount(): void {
    if (this.timerID) {
      return;
    }
    this.timerID = setInterval(() => {
      if (!this.timerID) {
        return;
      }
      if (this.state.time <= 0) {
        clearInterval(this.timerID);
        this.timerID = null;
      }
      this.setState((prev) => ({ time: prev.time - 1 }));
    }, 1000);
  }

  onClickPost = (post: Post) => {
    this.props.router.go("/PostView", post);
  };

  render() {
    const { post } = this.props;
    const { time } = this.state;

    if (time <= 0) {
      return null;
    }
    return (
      <li key={post.title}>
        <a href="#" onClick={() => this.onClickPost(post)}>
          {post.title}
        </a>
        <span style={{ marginLeft: 5 }}>{this.state.time}</span>
      </li>
    );
  }
}

export default PostItem;
