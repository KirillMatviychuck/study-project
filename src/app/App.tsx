import 'app/styles/_index.scss';
import { Link, useLocation } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "./providers/ThemeProvider";
import AppRoute from './providers/router/ui/AppRoute';




export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Link to='/'>MainPage</Link>
            <Link to='/about'>AboutPage</Link>
            <AppRoute />
            <div>
                <button onClick={toggleTheme}>TOGGLE THEME</button>
            </div>
        </div>
    )
}