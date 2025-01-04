import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from "shared/ui/AppLink"
import { AppLinkTheme } from "shared/ui/AppLink/ui/AppLink"
import cls from './Navbar.module.scss'
import { ThemeSwitcher } from "widgets/ThemeSwitcher"

interface NavbarProps {
    className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div className={cls.links}>
                <AppLink
                    to='/'
                    className={cls.mainLink}
                    theme={AppLinkTheme.SECONDARY}
                >MainPage</AppLink>
                <AppLink
                    to='/about'
                    theme={AppLinkTheme.SECONDARY}
                >AboutPage</AppLink>
            </div>
        </div>
    )
}
