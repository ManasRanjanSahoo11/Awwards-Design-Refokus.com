import NavBar from "./components/NavBar"
import Stripes from "./components/Stripes"
import Work from "./components/Work"

function App() {
  return (
    <div className="h-screen w-full bg-gray-800 text-white">
      <NavBar />
      <Work />
      <Stripes />
    </div>
  )
}

export default App