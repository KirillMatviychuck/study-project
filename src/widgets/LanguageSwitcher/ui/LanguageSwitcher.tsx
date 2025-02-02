import { FC } from "react"
import { useTranslation } from "react-i18next"
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ButtonTheme } from "shared/ui/Button"
import cls from './LanguageSwitcher.module.scss'

interface LanguageSwitcherProps {
    className?: string
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className }) => {
    const { t, i18n } = useTranslation();
    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ua' : 'en')
    }
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            onClick={changeLanguage}
            className={classNames(cls.navbar, {}, [className])}
        >
            {t('Мова')}
        </Button>
    )
}
