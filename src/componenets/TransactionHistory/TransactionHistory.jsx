import s from './TransactionHistory.module.css';
import propTypes from 'prop-types';

const TransactionHistory = ({ items }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(
                    ({ id, type, amount, currency }) => (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
                        </tr>
                    )
                )}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    id: propTypes.string,
    type: propTypes.string,
    amount: propTypes.string,
    currency: propTypes.string,
}.isRequired;

export default TransactionHistory