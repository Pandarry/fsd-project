import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async'
import { MainPageAsync } from './pages/MainPage/MainPage.async'
import { useTheme } from './theme/useTheme'
import { classNames } from './helpers/classNames/classNames'

export default function App() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('App', {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to="/">Main link</Link>
            <Link to="/about">About link</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}
