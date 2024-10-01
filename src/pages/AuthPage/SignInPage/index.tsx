import styles from './styles.module.css';

import { useState } from 'react';

import Form from '../../../components/Form';
import Button from '../../../components/Button';

const SignInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className={styles.sign_in_page}>
            <div className={styles.container}>
                <Form>
                    <h2>Login</h2>
                    <label>
                        E-mail
                        <input
                            type="email"
                            value={email}
                            placeholder="login@goshen.com"
                            required
                            onChange={e => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Senha
                        <input
                            type="password"
                            value={password}
                            placeholder="********"
                            required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </label>
                    <Button type="submit" value='Entrar' />
                </Form>
            </div>
        </div>
    );
};

export default SignInPage;