import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'

export default function App() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('App', {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to="/">Main link</Link>
            <Link to="/about">About link</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}
