import styles from './styles.module.css';

import { useState } from 'react';

const SignInPage = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    return (
        <article className={styles.sign_in_page}>
            <div className={styles.form_container}>
                <form className={styles.form}>
                    <span>Login</span>
                    <div>
                        <label>
                            E-mail
                            <input
                                type="email"
                                placeholder='email@terradegoshen.com'
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>
                            Senha
                            <input
                                type="password"
                                placeholder='••••••••'
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </label>
                    </div>
                    <button type='submit'>Entrar</button>
                </form>
            </div>
        </article>
    );
};

export default SignInPage;