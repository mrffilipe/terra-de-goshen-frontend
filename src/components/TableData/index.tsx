import styles from './styles.module.css';

type Props = {
    title: string;
    headerNames: string[];
    data: JSX.Element[] | undefined;
};

const TableData = (props: Props) => {
    return (
        <div className={styles.table_data}>
            <h3>{props.title}</h3>
            <table className={styles.table}>
                <thead>
                    <tr>
                        {props.headerNames.map((h, i) => (
                            <th key={i}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.data}
                </tbody>
            </table>
        </div>
    );
};

export default TableData;