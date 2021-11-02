import styles from './signInTrigger.module.scss'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import { useState } from 'react'

export function SignInTrigger () {
    const [isLoggedIn, setIsLoggedIn] = useState(true)

    return isLoggedIn ? (
        <button 
            type="button"    
            className={styles.signInTrigger}
        >
            <FaGithub color="#04D361" />
            Tales Montenegro
            <FiX color="737380" className={styles.closeIcon} />
        </button>
    ) : (
        <button 
            type="button"    
            className={styles.signInTrigger}
        >
            <FaGithub color="#EBA417" />
            Sign in with Github
        </button>
    )
}