import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './ErrorPage.module.scss'
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button"

interface ErrorPageProps {
    className?: string
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation()

    const reloadPage = () => {
        location.reload()
    }

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('Виникла непередбачувана помилка')}</p>
            <Button onClick={reloadPage}>{t('Оновити сторінку')}</Button>
        </div>
    )
}
