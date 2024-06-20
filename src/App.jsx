import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import React from "react"
import "./App.css"
export default function App() {
  const [category, setCatagory] = React.useState("general")
  return (
    <>
      <Navbar setCategory={setCatagory} category={category} />
      <NewsBoard category={category} />
    </>
  )
}
