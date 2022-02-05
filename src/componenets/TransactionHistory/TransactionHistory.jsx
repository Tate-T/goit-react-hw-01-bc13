const TransactionHistory = ({ id, type, amount, currency }) => {
    return (
        <table className="transaction-history">
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

export default TransactionHistory