import { Route, Routes } from "react-router"
import "./App.css"
import { Navbar } from "./components/layouts/Navbar"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </>
  )
}
