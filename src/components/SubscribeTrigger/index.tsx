import styles from './subscribeTrigger.module.scss'

export function SubscribeTrigger () {
    return (
        <button
            type="button"
            className={ styles.subscribeTrigger }
        >
            Subscribe now
        </button>
    )
}