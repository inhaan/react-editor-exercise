import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import { ChangeEvent, Component } from "react";
import { Post, Router } from "./interfaces";

interface PostWriteProps {
  onSavePost(post: Post): void;
  router: Router;
}
interface PostWriteState {
  title: string;
}

class PostWrite extends Component<PostWriteProps, PostWriteState> {
  state = {
    title: "",
  };

  editorEl: HTMLDivElement | null = null;
  editor?: Editor;

  componentDidMount() {
    if (this.editorEl) {
      this.editor = new Editor({
        el: this.editorEl,
        height: "500px",
        initialValue: " ",
        previewStyle: "vertical",
      });
    }
  }

  onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ ...this.state, title: e.target.value });
  };

  onClickSave = () => {
    if (!this.editor) {
      return;
    }
    const post: Post = {
      title: this.state.title,
      contents: this.editor.getHTML(),
    };
    this.props.onSavePost(post);
    this.props.router.go("/");
  };

  render() {
    const { title } = this.state;

    return (
      <div>
        <h1>글 작성하기</h1>
        <div>
          <label>제목</label>
          <input
            type="text"
            value={title}
            onChange={this.onChangeTitle}
          ></input>
        </div>
        <div>
          <label>내용</label>
          <div ref={(ref) => (this.editorEl = ref)}></div>
        </div>
        <div>
          <button onClick={this.onClickSave}>저장</button>
        </div>
      </div>
    );
  }
}

export default PostWrite;
