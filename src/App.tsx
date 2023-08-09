import React from 'react';
import styles from './app.module.scss';
import { TodoForm } from './components';

function App() {
  return (
    <div className={styles.app}>
      <TodoForm />
    </div>
  );
}

export default App;
