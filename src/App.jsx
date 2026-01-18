import styles from "./App.module.css";
import { Header } from "./Components/Header/Header";
import { Main } from "./Components/Main/Main";

function App() {
  return (
    <div className={styles.appContainer}>
      <div>
        <Header></Header>
      </div>
      <div>
        <Main></Main>
      </div>
    </div>
  );
}

export default App;
