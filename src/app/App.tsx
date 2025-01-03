import { Suspense } from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import 'app/styles/_index.scss';
import { useTheme } from "./providers/ThemeProvider";
import { routeConfig } from "./providers/router/ui/AppRouter";




export const App = () => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <Suspense fallback={<div>Loading...</div>} key={location.pathname}>
                <Routes>
                    {Object.values(routeConfig).map(({ element, path }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </Suspense>
            <div>
                <button onClick={toggleTheme}>TOGGLE THEME</button>
            </div>
        </div>
    )
}