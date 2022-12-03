import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.App}>
      <header>
        <h3 className={styles.logo}>Hello</h3>
      </header>
      <main>
        <input type='text' placeholder='username' />
      </main>
    </div>
  )
}

export default App
