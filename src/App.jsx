import { useState } from "react"
import Search from "./components/Search"

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <main> 
      <div className="patter" />
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className="text-gradient">Movies</span> You'll enjoy without the hassle</h1>
        </header>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  )
}

export default App
