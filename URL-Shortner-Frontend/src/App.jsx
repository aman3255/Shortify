import ButtonScreen from "./screens/ButtonScreen"
import LinksScreen from "./screens/LinksScreen"
import SigninScreen from "./screens/SigninScreen"
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import StateScreen from "./screens/StateScreen"

function App() {

  return (
    <>
      {/* <ButtonScreen/> */}
      {/* <LinksScreen/>
      <BrowserRouter>
      <Routes>
      <Route path="/dev/button" element={<ButtonScreen/>}/>
      <Route path="/dashboard/links" element={<LinksScreen/>}/>
      <Route path="/dashboard/links" element={<LinksScreen/>}/>
      </Routes>
      </BrowserRouter> */}
      <StateScreen/>
    </>
  )

}

export default App