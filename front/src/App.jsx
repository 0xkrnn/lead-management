import "./App.css"
import DashBoard from "./pages/DashBoard"
import Landingpage from "./pages/Landingpage"
import Leads from "./pages/Leads"
import Login from "./pages/Login"
import Registration from "./pages/Registration"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user" >
          <Route path="/user/" element={<DashBoard />} />
          <Route path="/user/leads" element={<Leads />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
