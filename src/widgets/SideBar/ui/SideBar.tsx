import { classNames } from 'shared/lib/classNames/classNames'
import styles from './SideBar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher/LangSwitcher'

interface SideBarProps {
    className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prev) => !prev)
    }
    return (
        <div className={classNames(styles.SideBar, { [styles.Collapsed]: collapsed }, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={styles.Switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
