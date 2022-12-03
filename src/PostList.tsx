import { Component } from "react";
import { Post, Router } from "./interfaces";
import PostItem from "./PostItem";

interface PostListProps {
  posts: Post[];
  router: Router;
}

class PostList extends Component<PostListProps> {
  onClickPostWrite = () => {
    this.props.router.go("/PostWrite");
  };

  render() {
    const { posts } = this.props;

    return (
      <div>
        <h1>글 목록 조회</h1>
        <ul>
          {posts.map((post) => (
            <PostItem router={this.props.router} post={post}></PostItem>
          ))}
        </ul>
        <div>
          <a href="#" onClick={this.onClickPostWrite}>
            글 작성하기
          </a>
        </div>
      </div>
    );
  }
}

export default PostList;
