
import { signIn, signOut, useSession } from 'next-auth/client'
import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import styles from './signInTrigger.module.scss'

export function SignInTrigger () {
    const [session] = useSession()

    return session ? (
        <button 
            type="button"    
            className={styles.signInTrigger}
        >
            <FaGithub color="#04D361" />
            {session.user.name}
            <FiX 
                className={styles.closeIcon} 
                onClick={() => signOut()}
            />
        </button>
    ) : (
        <button 
            type="button"    
            className={styles.signInTrigger}
            onClick={() => signIn('github')}
        >
            <FaGithub color="#EBA417" />
            Sign in with Github
        </button>
    )
}