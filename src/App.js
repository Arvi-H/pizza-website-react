import Navbar from "./Navbar"
import Home from "./pages/home"
import Menu from "./pages/menu"
import About from "./pages/about"
import Order from "./pages/order"

function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home/>
      break
    case "/about":
      component = <About/>
      break
    case "/menu":
      component = <Menu/>
      break
    case "/order":
      component = <Order/>
      break
    default:
      component = <Home/>
      break
  }
  return (<>
    <Navbar />
    <div className="container">
      {component}
    </div>
    </>
  )
}

export default App
