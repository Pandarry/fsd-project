import { Link } from 'react-router-dom'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(styles.NavBar)}>
            <ThemeSwitcher />
            <div className={styles.Links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    Main link
                </AppLink>
                <AppLink to="/about">About link</AppLink>
            </div>
        </div>
    )
}