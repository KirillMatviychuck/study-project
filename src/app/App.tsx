import { Suspense } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";



import { classNames } from "shared/lib/classNames/classNames";

import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";
import 'app/styles/_index.scss'
import { useTheme } from "./providers/ThemeProvider";




export const App = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <Suspense fallback={<div>Loading...</div>} key={location.pathname}>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route path='/about' element={<AboutPage />} />
                </Routes>
            </Suspense>
            <div>
                <button onClick={toggleTheme}>TOGGLE THEME</button>
            </div>
        </div>
    )
}