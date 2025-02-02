import { FC } from "react"
import { classNames } from "shared/lib/classNames/classNames"
import cls from './PageLoader.module.scss'
import { Loader } from "shared/ui/Loader"

interface PageLoaderProps {
    className?: string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {

    return (
        <div className={classNames(cls.pageLoader, {}, [className])}>
            <Loader />
        </div >
    )
}
