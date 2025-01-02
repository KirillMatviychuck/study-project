import { Link, Route, Routes, useLocation } from "react-router-dom"
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "../pages/MainPage/MainPage.async"
import './index.scss'
import { Suspense } from "react"

export const App = () => {
    const location = useLocation();
    return (
        <div className="app">
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <Suspense fallback={<div>Loading...</div>} key={location.pathname}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>

        </div>
    )
}