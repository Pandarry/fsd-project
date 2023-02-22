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
        <div
            data-testid="sidebar"
            className={classNames(
                styles.SideBar,
                { [styles.collapsed]: collapsed },
                [className],
            )}>
            <button data-testid="sidebar-toggle" onClick={onToggle}>
                toggle
            </button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
