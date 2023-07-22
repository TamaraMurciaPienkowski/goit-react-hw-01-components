import data from './data';
import PropTypes from 'prop-types';
import css from './statistic.module.css';

const dataArray = data;

export const Stats = () => {
  return (
    <section>
      <div className={css.statistics}>
        <h2 className={css.title}>Upload stats</h2>
        <ul className={css.statList}>
          {dataArray.map(item => (
            <li className={css.item}>
              <span className={css.label}>{item.label}</span>
              <span className={css.percentage}>{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

Stats.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
