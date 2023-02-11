import './styles/index.scss'
import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'

export default function App() {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={classNames('App', {}, [theme])}>
            <button onClick={toggleTheme}>Change theme</button>
            <Link to="/">Main link</Link>
            <Link to="/about">About link</Link>
            <AppRouter />
        </div>
    )
}
