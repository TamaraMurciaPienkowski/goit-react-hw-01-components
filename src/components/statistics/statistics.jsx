import data from './data';
import PropTypes from 'prop-types';
const dataArray = data;

export const Stats = () => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      <ul class="stat-list">
        {dataArray.map(item => (
          <li class="item">
            <span class="label">{item.label}</span>
            <span class="percentage">{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Stats.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
