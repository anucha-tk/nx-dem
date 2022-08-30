// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { useEffect, useState } from 'react';
import { Post } from '@nx-demo/server/util-interfaces';
export function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <>
      {/* <NxWelcome title="client" /> */}
      <h1>Post Lists</h1>
      {posts.map((post) => (
        <div key={post.title}>
          <li>{post.title}</li>
          <li>{post.body}</li>
        </div>
      ))}
      <div />
    </>
  );
}

export default App;
