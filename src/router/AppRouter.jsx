import { Route, Routes } from "react-router"
import { ContinentsPage } from "../pages/ContinentsPage"
import { CountriesPage } from "../pages/CountriesPage"
import { Navbar } from "../components/Navbar"
import { ErrorPage } from "../pages/ErrorPage"

export const AppRouter = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<ContinentsPage/>}/>
      <Route path="continent/:name" element={<CountriesPage/>}/>
      <Route path="/*" element={<ErrorPage/>}/>
    </Routes>
    </>
  )
}
