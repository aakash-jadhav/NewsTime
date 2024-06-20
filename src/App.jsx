import Navbar from "./components/Navbar"
import NewsBoard from "./components/NewsBoard"
import React from "react"
export default function App() {
  const [category, setCatagory] = React.useState("general")
  return (
    <>
      <Navbar setCategory={setCatagory} category={category} />
      <NewsBoard category={category} />
      {/* <h1>Hello world</h1> */}
    </>
  )
}
