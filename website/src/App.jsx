import { Header } from "./components/Header/Header"
import { Intro } from "./sections/Intro"

function App() {

  return (
    <>
      <header className="shadow-md">
        <Header />
      </header>
      <main>
        <Intro />
      </main>

      <footer>
        
      </footer>
    </>
  )
}

export default App
