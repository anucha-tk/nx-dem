// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { useEffect, useState } from 'react';
import { Post } from '@nx-demo/server/util-interfaces';
export function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  return (
    <>
      {/* <NxWelcome title="client" /> */}
      <h1>Post Lists</h1>
      {posts.map((post) => (
        <div key={post._id}>
          <li>{post.firstName}</li>
          <li>{post.lastName}</li>
          <li>{post.email}</li>
        </div>
      ))}
      <div />
    </>
  );
}

export default App;
