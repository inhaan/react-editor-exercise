import { useState } from "react";
import { Post, Router } from "./interfaces";
import PostList from "./PostList";
import PostView from "./PostView";
import PostWrite from "./PostWrite";

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  const [routePath, setRoutePath] = useState("/");
  const [routeData, setRouteData] = useState<any>(null);

  const router: Router = {
    go(href: string, data: any) {
      setRoutePath(href.toLocaleLowerCase());
      setRouteData(data);
    },
  };

  const onSavePost = (item: Post, data?: any) => {
    setPosts([...posts, item]);
    setRouteData(data);
  };

  const onClickMenu = (href: string) => {
    setRoutePath(href);
  };

  let menu = (
    <div>
      <PostList router={router} posts={posts}></PostList>
    </div>
  );

  if (routePath === "/postwrite") {
    menu = (
      <div>
        <PostWrite router={router} onSavePost={onSavePost}></PostWrite>
      </div>
    );
  }
  if (routePath === "/postview") {
    menu = (
      <div>
        <PostView post={routeData}></PostView>
      </div>
    );
  }

  return (
    <div>
      <nav>
        <a href="#" onClick={() => onClickMenu("/")}>
          Home
        </a>
      </nav>
      {menu}
    </div>
  );
}

export default App;
