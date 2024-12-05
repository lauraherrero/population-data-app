import { Route, Routes } from "react-router"
import { ContinentsPage } from "../pages/ContinentsPage"
import { CountriesPage } from "../pages/CountriesPage"
import { Navbar } from "../components/Navbar"

export const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<ContinentsPage/>}/>
      <Route path="continent/:name" element={<CountriesPage/>}/>
    </Routes>
    </>
  )
}
