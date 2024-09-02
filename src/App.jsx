import { Outlet } from "react-router-dom"
import Navbar from "./component/NavBar/Navbar"
import Footer from "./component/Footer/Footer"


function App() {

  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
