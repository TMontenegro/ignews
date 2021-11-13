import styles from './subscribeTrigger.module.scss'

interface SubscribeTriggerProps {
    priceId: string
}

export function SubscribeTrigger ({ priceId } : SubscribeTriggerProps) {
    return (
        <button
            type="button"
            className={ styles.subscribeTrigger }
        >
            Subscribe now
        </button>
    )
}