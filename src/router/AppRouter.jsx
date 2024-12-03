import { Navigate, Route, Routes } from "react-router"
import { ContinentsPage } from "../pages/ContinentsPage"
import { CountriesPage } from "../pages/CountriesPage"
import { Navbar } from "../components/Navbar"

export const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="continents" element={<ContinentsPage/>}/>
      <Route path="countries" element={<CountriesPage/>}/>

      <Route path="/" element={<Navigate to="/continents"/>} />
    </Routes>
    </>
  )
}
