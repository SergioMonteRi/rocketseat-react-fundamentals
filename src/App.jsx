import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
       <Sidebar />
        <main>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi praesentium similique ducimus provident nemo ut veniam, in harum error exercitationem cumque enim fugiat atque alias, at aut necessitatibus maxime facere.


        </main>
      </div>
    </>
  )
}

export default App
