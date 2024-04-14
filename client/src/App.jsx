import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import About from "./pages/About"
import Profile from "./pages/Profile"
import Header from "./pages/Header"
import Goals from "./pages/Goals"
import Tracker from "./pages/Tracker"
import Calendar from "./pages/Calendar"


export default function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/tracker" element={<Tracker />} />
        <Route path="/calendar" element={<Calendar />} />

      </Routes>
    </BrowserRouter>
  )
}
