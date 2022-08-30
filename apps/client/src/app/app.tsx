// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    fetch('/api')
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, []);

  return (
    <>
      <NxWelcome title="client" />
      <div />
    </>
  );
}

export default App;
