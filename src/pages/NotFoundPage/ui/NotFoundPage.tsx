import { classNames } from 'shared/lib/classNames/classNames'
import styles from './NotFoundPage.module.scss'
import { useTranslation } from 'react-i18next'

interface NotFoundPage {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPage) => {
    const { t } = useTranslation()

    return <div className={classNames(styles.NotFoundPage)}>{t('Страница не найдена')}</div>
}
