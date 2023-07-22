import transactions from './transactions';
import PropTypes from 'prop-types';
import css from './transaction.module.css';

const transactionsArray = transactions;

export const TransactionHistory = () => {
  return (
    <div className={css.wrapper}>
      <table className={css.transactionHistory}>
        <thead className={css.head}>
          <tr>
            <th className={css.headDescription}>Type</th>
            <th className={css.headDescription}>Amount</th>
            <th className={css.headDescription}>Currency</th>
          </tr>
        </thead>

        <tbody className={css.tBody}>
          {transactionsArray.map(action => (
            <tr key={action.id} className={css.tRow}>
              <td className={css.item}>{action.type}</td>
              <td className={css.item}>{action.amount}</td>
              <td className={css.item}>{action.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
