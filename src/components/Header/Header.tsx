import { DetailedHTMLProps, FC, HTMLAttributes } from 'react'
import logo from '../../images/logo.svg'
import whatsappQrCode from '../../images/whatsapp-qrcode.svg'
import telegramQrCode from '../../images/telegram-qrcode.svg'
import whatsappLogo from '../../images/whatsapp.svg'
import telegramLogo from '../../images/telegram.svg'
import styles from './Header.module.scss'
import classNames from 'classnames'

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>

export const Header: FC<Props> = (props) => {
    return (
        <header {...props} className={styles.header}>
            <div className={styles.header__qrCodeContainer}>
                <img src={telegramQrCode} alt="telegram-qrcode" />
            </div>
            <div className={styles.header__qrCodeContainer}>
                <img src={whatsappQrCode} alt="whatsapp-qrcode" />
            </div>

            <div className={classNames("appearanceAnimation", styles.header__cta)}>
                <h2>Присылай вариант</h2>
                <div className={styles.header__contacts}>
                    <p>+ 7 932 542 32 34</p>
                    <div className={styles.header__logoContainer}>
                        <img src={whatsappLogo} alt="telegram-qrcode" />
                        <img src={telegramLogo} alt="whatsapp-qrcode" />
                    </div>
                </div>
            </div>

            <img className={styles.header__logo} src={logo} alt="logo" />
        </header>
    )
}