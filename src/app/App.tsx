import 'app/styles/_index.scss';
import { classNames } from "shared/lib/classNames/classNames";

import { useTheme } from "./providers/ThemeProvider";
import AppRouter from './providers/router/ui/AppRouter';
import { Navbar } from 'widgets/Navbar';




export const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRouter />
            <div>
                <button onClick={toggleTheme}>TOGGLE THEME</button>
            </div>
        </div>
    )
}


