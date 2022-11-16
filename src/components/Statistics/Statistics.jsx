import { List, StatisticsTitle, Text } from './Statistics.styled';
import PropTypes from 'prop-types';

export default function Statistics({ object, total, totalPositive }) {
  return (
    <>
      <StatisticsTitle>Statistics</StatisticsTitle>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <List>
            {Object.keys(object).map(key => {
              return (
                <li key={key}>
                  {key[0].toUpperCase() + key.slice(1)}:{' '}
                  <span>{object[key]}</span>
                </li>
              );
            })}
          </List>
          <Text>
            Total: <span>{total}</span>
          </Text>
          <Text>
            Positive feedback: <span>{totalPositive}</span>
          </Text>
        </>
      )}
    </>
  );
}

Statistics.propTypes = {
  object: PropTypes.object,
  total: PropTypes.number,
  totalPositive: PropTypes.string,
};
