import './styles/index.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/NavBar'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

export default function App() {
    const { theme } = useTheme()

    return (
        <div className={classNames('App', {}, [theme])}>
            <NavBar />
            <AppRouter />
        </div>
    )
}
