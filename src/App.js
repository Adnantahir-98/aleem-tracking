import './App.css';
import { Routes, Route } from "react-router"

import Navbar from './Components/Navbar'
import Footer from "./Components/Footer"

import Home from './Screens/Home'
import Tracking from "./Screens/Tracking"
import Shippment from './Screens/CreateShippment'
import Page404NotFound from "./Screens/Page404"


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index exact element={<Home />} />
        <Route path="/tacking" exact element={<Tracking />} />
        <Route path="/create-shippment" exact element={<Shippment />} />
        <Route path="*" exact element={<Page404NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App;
