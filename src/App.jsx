import Cards from "./components/Cards"
import Footer from "./components/Footer"
import Marquees from "./components/Marquees"
import NavBar from "./components/NavBar"
import Products from "./components/Products"
import Stripes from "./components/Stripes"
import Work from "./components/Work"

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-800 text-white">
      <NavBar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  )
}

export default App