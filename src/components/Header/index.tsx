import styles from './styles.module.scss'

export function Header () {
    return (
        <header className={styles.container}>
            <div className={styles.content}>
                <img src="/images/logo.svg" alt="ig.news logo" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav>
            </div>
        </header>
    )
}