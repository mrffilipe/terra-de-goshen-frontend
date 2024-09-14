import styles from './styles.module.css';

import Footer from "../Footer";
import Header from "../Header";

type Props = {
    children: React.ReactNode;
};

const Layout = (props: Props) => {
    return (
        <>
            <Header />
            <main className={styles.main}>
                <div className={styles.container}>
                    {props.children}
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Layout;