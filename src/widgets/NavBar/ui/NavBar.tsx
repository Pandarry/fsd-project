import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

interface NavBarProps {
    className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    return (
        <div className={classNames(styles.NavBar, {}, [className])}>
            <div className={styles.Links}>
                <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                    Главная
                </AppLink>
                <AppLink to="/about">О сайте</AppLink>
            </div>
        </div>
    )
}
