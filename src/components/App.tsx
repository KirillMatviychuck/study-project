import { Link, Route, Routes, useLocation } from "react-router-dom"
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async"
import { MainPageAsync } from "../pages/MainPage/MainPage.async"
import '../styles/_index.scss'
import { Suspense, useState } from "react"
import useTheme from "../theme/useTheme"



export const App = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <Suspense fallback={<div>Loading...</div>} key={location.pathname}>
                <Routes>
                    <Route path='/' element={<MainPageAsync />} />
                    <Route path='/about' element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
            <div>
                <button onClick={toggleTheme}>TOGGLE THEME</button>
            </div>
        </div>
    )
}