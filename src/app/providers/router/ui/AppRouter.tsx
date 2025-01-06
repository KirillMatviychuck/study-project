import { Suspense } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"
import { PageLoader } from "widgets/PageLoader"


const AppRoute = () => {
    const location = useLocation()
    return (


        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <Suspense fallback={<PageLoader />} key={location.pathname}>
                            <div className='page-wrapper'>
                                {element}
                            </div>
                        </Suspense >
                    }
                />
            ))}
        </Routes>

    )
}

export default AppRoute