import 'antd/dist/antd.min.css'
import Forms from './components/form/Form'
import Navbar from './components/navbar/Navbar'
import styles from './styles.module.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className={styles.formWrapper}>
        <Forms />
        <div className={styles.plainDiv}></div>
      </div>
    </div>
  )
}

export default App
