import s from './TransactionHistory.module.css';
import propTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
        <>
            <h2>TASK 4</h2>
            <table className={s.transactionHistory}>
                <thead className={s.transactionHead}>
                    <tr>
                        <th className={s.item}>Type</th>
                        <th className={s.item}>Amount</th>
                        <th className={s.item}>Currency</th>
                    </tr>
                </thead>

                <tbody >
                    {items.map(
                        ({ id, type, amount, currency }) => (
                            <tr key={id} className={s.transactionTable}>
                                <td className={s.item}>{type}</td>
                                <td className={s.item}>{amount}</td>
                                <td className={s.item}>{currency}</td>
                            </tr>
                        )
                    )}
                </tbody>
            </table>
        </>
    )
}

TransactionHistory.propTypes = {
    id: propTypes.string,
    type: propTypes.string,
    amount: propTypes.string,
    currency: propTypes.string,
}.isRequired;

export default TransactionHistory