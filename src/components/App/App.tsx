import SearchInput from '../../uikit/SearchInput/SearchInput.tsx';

import styles from './styles.module.scss';

const App = () => {

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>
        Repository search app
      </h1>
      <SearchInput />
    </div>
  )
}

export default App
