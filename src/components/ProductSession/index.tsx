import styles from './styles.module.css';

type Props = {
    children?: React.ReactNode;
    className?: string;
};

const ProductSession = (props: Props) => {
    return (
        <section className={`${styles.product_session} ${props.className}`}>
            {props.children}
        </section>
    );
};

export default ProductSession;