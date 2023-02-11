import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import styles from './AppLink.module.scss'

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'inverted',
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const { children, to, className, theme = AppLinkTheme.PRIMARY, ...otherProps } = props
    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [className, styles[theme]])}
            {...otherProps}>
            {children}
        </Link>
    )
}
