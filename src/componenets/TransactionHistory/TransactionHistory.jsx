import s from './TransactionHistory.module.css';
import propTypes from 'prop-types';

const TransactionHistory = ({ id, type, amount, currency }) => {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody key={id}>
                <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
                <tr>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
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