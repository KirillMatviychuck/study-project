import { Suspense } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRoute = () => {
    const location = useLocation()
    return (
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
    )
}

export default AppRoute